import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
  Image,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

import {Actions} from 'react-native-router-flux';

export default class HealthInfoItem extends Component<{}> {
  render() {
    const {title, image, detailArticle} = this.props.data;
    const shortText =
      detailArticle.length < 115
        ? detailArticle
        : detailArticle.substring(0, 115) + '...';

    return (
      <>
        <TouchableOpacity
          style={styles.container}
          onPress={() => this.RBSheet.open()}>
          <View style={styles.avatarWrapper}>
            <Image
              style={{
                width: 100,
                height: 80,
              }}
              source={{uri: image}}
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{shortText}</Text>
          </View>
        </TouchableOpacity>
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={800}
          openDuration={250}
          customStyles={{
            container: {
              flex: 1,
              paddingTop: 48,
              paddingBottom: 48,
              paddingLeft: 24,
              paddingRight: 24,
            },
          }}>
          <ScrollView>
            <View>
              <Text style={styles.title}>{title}</Text>
              <View style={styles.avatarWrapper}>
                <Image
                  style={{
                    display: 'flex',
                    height: 200
                  }}
                  source={{uri: image}}
                />
              </View>
              <View style={styles.content}>
                <Text style={styles.subtitle}>{detailArticle}</Text>
              </View>
            </View>
          </ScrollView>
        </RBSheet>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 24,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 30,
    color: '#000',
  },
  title: {
    fontSize: 16,
    color: '#000',
    marginBottom: 8,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 14,
    color: '#585858',
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: '#f1f1f1',
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
  },
  content: {
    paddingLeft: 12,
    flex: 1,
  },
  answer: {
    marginTop: 24,
    color: '#000',
  },
});
