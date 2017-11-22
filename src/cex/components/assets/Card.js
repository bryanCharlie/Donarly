// //Author- @Remel Kabir
// //Generic Card

// import React, { Component } from 'react';
// import { Image, Platform } from 'react-native';
// import { Card, CardItem, Text, Grid, Col, Row} from 'native-base';
// import StarRating from 'react-native-star-rating';

// export class CardBase extends Component {
    
//     constructor(props){
//         super(props);

//         //state of this Component
//         this.state = {
//             starCount: this.props.rating
//         };
//     }

//     //Changes the state with the new rating
//     onStarRatingPress(rating) {
//         this.setState({
//             starCount: rating
//         });
//     }
    
//     render() {
//         return (
//             <Card>

//                 <CardItem cardBody style={{ //Promotion Image and Title of the Charity
//                     borderTopLeftRadius: 7,
//                     borderTopRightRadius: 7,
//                     overflow: 'hidden'
//                 }}>
//                     <Image source={this.props.imgSrc} style={{ //Image
//                         height: this.props.imageHeight,
//                         width: null,
//                         flex: 1,
//                         flexDirection: 'column',
//                         justifyContent: 'center',
//                         alignItems: 'center' }}>
//                         <Text style={{  //Title
//                             backgroundColor: 'transparent',
//                             color: '#ffffff',
//                             fontWeight: '700',
//                             fontSize: 20 }}>{this.props.title}</Text>
//                     </Image>
//                 </CardItem>
        

//                 <CardItem style={{ //Rating and Description
//                     borderBottomLeftRadius: (Platform.OS === 'ios') ? 7 : 0,
//                     borderBottomRightRadius: (Platform.OS === 'ios') ? 7 : 0,
//                     backgroundColor: this.props.descriptionColor, //Dynamic color change
//                     overflow: 'hidden'
//                 }}>
//                     <Grid>
//                         <Col size={3} //Rating
//                             style={{
//                                 justifyContent: 'center'
//                             }}>
//                             <StarRating
//                                 disabled={false}
//                                 maxStars={5}
//                                 rating={this.state.starCount}
//                                 selectedStar={(rating) => this.onStarRatingPress(rating)}
//                                 starColor={'#022F40'}
//                                 starSize={20}
//                             />
//                         </Col>
                        
//                         <Col size={1}>
//                         </Col>
                        
//                         <Col size={6}>
//                             <Text>{this.props.description}</Text>
//                         </Col>
//                     </Grid>
//                 </CardItem>

//             </Card>

//         );
//     }
// }

// //All the props that can be passes while using this card. 
// //Default values if custom props weren't given. 
// CardBase.defaultProps = {
//     title: 'Donarly', // Charity's Title
//     imgSrc: require('images/bg3.jpg'), // Charity's promotion picutre
//     descriptionColor: '#E4572E', // background color of rating and description
//     description: 'Donarly Inc. helps connect charities with donars', // Details about the Charity/Compnay
//     imageHeight: 175, //ranges from 0-200
//     rating: 5 //Inital rating for any Charity
// };






// //Alester's Charity Card

// // import React, { Component } from 'react';
// // import { View, Text, Image } from 'react-native';
// // import { Card, ListItem, Rating } from 'react-native-elements';
// // import { Button } from 'assets/Button';


// // const ratingCompleted = (rating)=> {
// //     console.log('Rating is: ' + rating);
// // };

// // export const charityCard = ({charitySummary, charityImg, charityRating, charityTitle }) =>  { // es6 destructuring amicoollykebyranyet??

// //     return(
// //           // implemented with Text and Button as children
// //           <Card
// //             containerStyle = {{borderRadius:10}}
// //             image={charityImg}
// //             wrapperStyle={{borderRadius:10}}
// //             imageStyle={{backgroundColor:'white'}}
// //             featuredTitle= {charityTitle} >
// //             <View>
// //             <Rating
// //               type='star'
// //               startingValue={charityRating}
// //               readonly
// //               ratingBackgroundColor= '#E4571E'
// //               onFinishRating ={ratingCompleted}
// //               imageSize={30}
// //               style={{ paddingVertical: 10}}
// //               />
// //             <Text style={{marginBottom: 10}}>
// //               {charitySummary}
// //             </Text>
// //             <Button
// //             buttonColor = '#F0A202'
// //             buttonText = 'See More '
// //             />
// //             </View>
// //           </Card>
// //         );
// // };
