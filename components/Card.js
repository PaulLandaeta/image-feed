import { Image, StyleSheet, View, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";
import React from "react";
import AuthorRow from "./AuthorRow";
export default class Card extends React.Component {
  static propTypes = {
    fullname: PropTypes.string.isRequired,
    image: Image.propTypes.source.isRequired,
    linkText: PropTypes.string.isRequired,
    onPressLinkText: PropTypes.func.isRequired
  };
  static defaultProps = {
    linkText: "",
    onPressLinkText: () => {}
  };

  state = {
    loading: true
  };

  handleLoad = () => {
    this.setState({ loading: false });
  };

  render() {
    const { fullname, linkText, image, onPressLinkText } = this.props;
    const { loading } = this.state;

    return (
      <View>
        <AuthorRow
          fullname={fullname}
          linkText={linkText}
          onPressLinkText={onPressLinkText}
        />
        <View style={styles.image}>
          {loading && (
            <ActivityIndicator style={StyleSheet.absoluteFill} size={"large"} />
          )}
          <Image style={styles.image} source={image} onLoad={this.handleLoad} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    backgroundColor: "rgba(0,0,0,0.02)"
  }
})