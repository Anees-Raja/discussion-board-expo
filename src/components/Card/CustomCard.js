import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Button,
  Icon
} from "native-base";

export default class CustomCard extends Component {
  render() {
    return (
      <Content padder>
        <CardItem header>
          <Text>NativeBase</Text>
        </CardItem>
          <CardItem>
            <Body>
              <Text>
                Lorem ipsum dolor sit amet, ei nam nulla veritus postulant.
                Duo integre antiopam ea, scaevola vivendum eam te. Ea pro
                quando exerci. Has esse soluta repudiare et. Ut quis dolorem
                evertitur sed. Ne tempor scribentur cotidieque mea, invidunt
                omittantur ne usu. Elitr maiestatis ius no. Ius cu ocurreret
                maluisset evertitur, nec dolore petentium ocurreret eu. Cu cum
                unum forensibus, ex vim iuvaret erroribus, sea an elitr
                detracto voluptaria. Et sit nostro aliquip veritus. Mei error
                veritus officiis at, at commodo appareat partiendo mel.
              </Text>
            </Body>
          </CardItem>
        <CardItem footer>
          <Button transparent success><Icon name="thumbs-up" /></Button>
        </CardItem>
      </Content>
    );
  }
}