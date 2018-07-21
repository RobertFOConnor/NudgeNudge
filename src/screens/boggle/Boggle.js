import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import {makeGrid, getPieceRotation, shouldUnderline} from './GameManager';
import TimerCountdown from './TimerCountdown';
import {assets} from '../../common/assets';
import {Button} from "../../components/button/Button";

const TIME = 3; //minutes

export default class Boggle extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            grid: makeGrid(),
            rotation: 0,
            timeUp: false,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.backgroundImage}
                    source={{uri: "https://iphonewalls.net/wp-content/uploads/2012/06/Wooden%20Background1%20iPhone%20Wallpaper.jpg"}}
                />
                <View style={styles.timerContainer}>
                    {!this.state.timeUp ?
                        <TimerCountdown
                            initialSecondsRemaining={60000 * TIME}
                            onTick={secondsRemaining => console.log('tick', secondsRemaining)}
                            onTimeElapsed={() => this.setState({ timeUp: true })}
                            allowFontScaling={true}
                            style={styles.timerText}
                        /> :
                        <Text style={styles.timerText}>Time's up!</Text>
                    }
                </View>
                <View style={[styles.gridContainer, {transform: [{rotate: this.state.rotation.toString() + 'deg'}]}]}>
                    {this.renderSquare()}
                </View>
                {/*<Button*/}
                    {/*title={'Rotate'}*/}
                    {/*onPress={() => this.setState({rotation: this.state.rotation + 90})}/>*/}
            </View>
        );
    }

    renderSquare = () => {

        return this.state.grid.map(function (row, j) {
            return (
                <View key={j}>
                    {row.map(function (letter, i) {
                        return (
                            <View key={i} style={styles.square}>
                                <Image source={assets.cube} style={styles.squareImage}/>
                                <Text
                                    style={[styles.squareText, {transform: [{rotate: getPieceRotation()}]}, {textDecorationLine: shouldUnderline(letter) ? 'underline' : 'none'}]}>{letter === 'Q' ? 'Qu' : letter}</Text>
                            </View>
                        );
                    })}
                </View>
            )
        });
    }
}
