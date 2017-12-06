import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

export const Card = ({ title, thumbnailURI, orgImageURI, description, ratingImageURL }) => {
    return (
      <Container>
        <Header />
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: thumbnailURI}} />
                <Body>
                  <Text> { title } </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: orgImageURI}} style={style.image}/>
                <Text> { description } </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Image source={{uri: ratingImageURI}}/>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
};

const style = {
    image: {
        height: 200, 
        width: 200, 
        flex: 1
    }
};