import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateProjectDetails } from '../store/actions/projectActions';

const ProjectDetails = () => {
  const dispatch = useDispatch();
  const project = useSelector(state => state.project);

  const [title, setTitle] = useState(project.title);
  const [description, setDescription] = useState(project.description);
  const [deadline, setDeadline] = useState(project.deadline);

  const handleSaveChanges = () => {
    if (title === '' || description === '' || deadline === '') {
      Alert.alert('Error', 'Please fill in all fields');
    } else {
      dispatch(updateProjectDetails({ title, description, deadline }));
      Alert.alert('Success', 'Project details updated successfully');
    }
  };

  return (
    <View>
      <Text>Project Title</Text>
      <TextInput
        value={title}
        onChangeText={text => setTitle(text)}
        placeholder="Enter project title"
      />

      <Text>Project Description</Text>
      <TextInput
        value={description}
        onChangeText={text => setDescription(text)}
        placeholder="Enter project description"
      />

      <Text>Project Deadline</Text>
      <TextInput
        value={deadline}
        onChangeText={text => setDeadline(text)}
        placeholder="Enter project deadline"
      />

      <Button title="Save Changes" onPress={handleSaveChanges} />
    </View>
  );
};

export default ProjectDetails;