import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import HealthInfoItem from './HealthInfoItem';
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../utils/constant";

const HealthInfo = ()=> {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `${baseUrl}/article-list`;
    axios.get(url).then((res) => {
      setArticles(res.data.articles);
    });
  }, []);

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Info Kesehatan</Text>
        {articles.map(m => {
          return <HealthInfoItem key={m.id} data={m} />;
        })}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
  title: {
    fontSize: 22,
    color: '#000',
    marginBottom: 18,
    fontWeight: '700',
  },
});

export default HealthInfo;
