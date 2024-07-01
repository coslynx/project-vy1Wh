import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateProjectDetails } from '../store/actions/projectActions';

const Notifications = () => {
  const dispatch = useDispatch();
  const project = useSelector(state => state.project);

  useEffect(() => {
    if (project.success) {
      Alert.alert('Success', 'Project details updated successfully');
    }
  }, [project.success]);

  return (
    <View>
      <Text>Notifications Component</Text>
    </View>
  );
};

export default Notifications;