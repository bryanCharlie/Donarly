const REQM = ' is required';
const STRIPE_URL = 'https://api.stripe.com/v1/';
const pandaPublicKayTest = 'pk_test_hoqO8vgA9RK-VSXr6gCU1Q';


  const defaultHeader = () => {
    return {
      Accept: 'application/json',
      Authorization: `Bearer ${this.stripePublicKey}`,
    };
  }

  /**
   * Generic method post to Stripe Rest API
   * @param resource : Rest API ressource ie. tokens, charges, etc.
   * @param properties : object, key by form parm
   */
  async stripePostRequest = (resource, properties) => {
    Promise {
    const body = Object.entries(properties)
     .map(([key, value]) => `card[${key}]=${value}`)
     .reduce((previous, current) => `${previous}&${current}`, '');

    const result = await fetch(`${STRIPE_URL}${resource}`, {
      method: 'POST',
      headers: {
        ...this.defaultHeader(),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    });

    return result.json();
  }

  /**
   * Only operation allowed from client/Using only public token
   * @param info : { number, exp_month, exp_year, address_city, address_country, address_line1,
   * ... address_line2, address_state, address_zip, currency, cvc }
   */
  createToken(info: ?Object): Promise {
    if (!info) throw new Error(`info${REQM}`);
    if (!info.number) throw new Error(`cardNumber${REQM}`);
    if (!info.exp_month) throw new Error(`expMonth${REQM}`);
    if (!info.exp_year) throw new Error(`expYear${REQM}`);
    if (!info.cvc) throw new Error(`cvc${REQM}`);

    const card = Object.assign({}, info);
    return this.stripePostRequest('tokens', card);
  }
}

const test = {
  "number": "9999999999999999",
  "exp_month": "08",
  "exp_year": "08",
  "cvc": "255"
}


export default Stripe;