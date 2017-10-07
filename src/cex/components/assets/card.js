import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export class CardBase extends Component {
    render() {
        return (
            <Container >
                <Content>
                    <Card>
                        <CardItem cardBody style={{
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            borderTopLeftRadius: 7,
                            borderTopRightRadius: 7,
                            overflow: 'hidden'}}>
                            <Image source={ require('images/bg4.png') } style={{ height: 200, width: null, flex: 1}}>
                                <Text style={{backgroundColor: 'transparent'}}>Charity</Text>
                            </Image>
                        </CardItem>
                        <CardItem style={{
                            borderBottomLeftRadius: 7,
                            borderBottomRightRadius: 7,
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                            backgroundColor: '#a9a9a9',
                            overflow: 'hidden'
                        }}>
                            <Left>
                                <Button transparent>
                                    <Icon active name="thumbs-up" />
                                    <Text>12 Likes</Text>
                                </Button>
                            </Left>
                            <Body>
                                <Button transparent>
                                    <Icon active name="chatbubbles" />
                                    <Text>4 Comments</Text>
                                </Button>
                            </Body>
                            <Right>
                                <Text>11h ago</Text>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}