import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateProjectDetails } from '../store/actions/projectActions';

const EditProject = ({ route, navigation }) => {
  const [projectDetails, setProjectDetails] = useState({});
  const project = useSelector(state => state.project);
  const dispatch = useDispatch();

  useEffect(() => {
    setProjectDetails(project);
  }, [project]);

  const handleInputChange = (key, value) => {
    setProjectDetails({
      ...projectDetails,
      [key]: value
    });
  };

  const handleSaveChanges = () => {
    dispatch(updateProjectDetails(projectDetails));
    Alert.alert('Success', 'Project details updated successfully');
  };

  return (
    <View>
      <Text>Edit Project</Text>
      <TextInput
        placeholder="Project Title"
        value={projectDetails.title}
        onChangeText={(text) => handleInputChange('title', text)}
      />
      <TextInput
        placeholder="Description"
        value={projectDetails.description}
        onChangeText={(text) => handleInputChange('description', text)}
      />
      <TextInput
        placeholder="Deadlines"
        value={projectDetails.deadlines}
        onChangeText={(text) => handleInputChange('deadlines', text)}
      />
      <Button title="Save Changes" onPress={handleSaveChanges} />
    </View>
  );
};

export default EditProject;