import React from "react";
import { Modal, StyleSheet, View, Platform } from "react-native";
import { Constants } from "expo";

import Feed from "./screens/Feed";
import Comments from "./screens/Comments";

export default class App extends React.Component {
  state = {
    showModal: false,
    selectedItemId: null,
    commentsForItem: {}
  };

  openCommentScreen = id => {
    this.setState({
      showModal: true,
      selectedItemId: id
    });
  };

  closeCommentScreen = () => {
    this.setState({
      showModal: false,
      selectedItemId: null
    });
  };

  handleSubmitEditing = text => {
    console.log("submitted", text);
  };

  handleClose = () => {
    console.log("close pressed");
  };

  onSubmitComment = text => {
    const { selectedItemId, commentsForItem } = this.state;
    const comments = commentsForItem[selectedItemId] || [];

    const updated = {
      ...commentsForItem,
      [selectedItemId]: [...comments, text]
    };

    this.setState({ commentsForItem: updated });
  };

  render() {
    const { showModal, commentsForItem, selectedItemId } = this.state;

    return (
      <View style={styles.container}>
        <Feed
          style={styles.feed}
          commentsForItem={commentsForItem}
          onPressComments={this.openCommentScreen}
        />

        <Modal
          visible={showModal}
          animationType="slide"
          onRequestClose={this.closeCommentScreen}
        >
          <Comments
            style={styles.comments}
            comments={commentsForItem[selectedItemId] || []}
            onClose={this.closeCommentScreen}
            onSubmitComment={this.onSubmitComment}
          />
        </Modal>
      </View>
    );
  }
}
const platformVersion =
  Platform.OS === "ios" ? parseInt(Platform.Version, 10) : Platform.Version;

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fff"
  },

  feed: {
    flex: 1,
    marginTop:
      Platform.OS === "android" || platformVersion < 11
        ? Constants.statusBarHeight
        : 0
  },

  comments: {
    flex: 1,
    marginTop:
      Platform.OS === "ios" && platformVersion < 11
        ? Constants.statusBarHeight
        : 0
  }
});
