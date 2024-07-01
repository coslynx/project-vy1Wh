import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, ScrollView, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { editProjectDetails } from '../store/actions/projectActions';

const HomeScreen = () => {
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectDeadline, setProjectDeadline] = useState('');
  const projectDetails = useSelector(state => state.projectDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    setProjectTitle(projectDetails.title);
    setProjectDescription(projectDetails.description);
    setProjectDeadline(projectDetails.deadline);
  }, [projectDetails]);

  const handleSaveChanges = () => {
    if (projectTitle === '' || projectDescription === '' || projectDeadline === '') {
      Alert.alert('Error', 'Please fill in all fields');
    } else {
      dispatch(editProjectDetails({ title: projectTitle, description: projectDescription, deadline: projectDeadline }));
      Alert.alert('Success', 'Project details updated successfully');
    }
  };

  return (
    <ScrollView>
      <View>
        <Text>Project Title:</Text>
        <TextInput
          value={projectTitle}
          onChangeText={text => setProjectTitle(text)}
        />
      </View>
      <View>
        <Text>Project Description:</Text>
        <TextInput
          value={projectDescription}
          onChangeText={text => setProjectDescription(text)}
        />
      </View>
      <View>
        <Text>Project Deadline:</Text>
        <TextInput
          value={projectDeadline}
          onChangeText={text => setProjectDeadline(text)}
        />
      </View>
      <Button title="Save Changes" onPress={handleSaveChanges} />
    </ScrollView>
  );
};

export default HomeScreen;