import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { editProjectDetails, getProjectDetails } from '../store/actions/projectActions';

const ProjectListScreen = () => {
  const dispatch = useDispatch();
  const projectDetails = useSelector(state => state.project.projectDetails);

  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  useEffect(() => {
    dispatch(getProjectDetails());
  }, []);

  const handleEdit = () => {
    setEditing(true);
    setTitle(projectDetails.title);
    setDescription(projectDetails.description);
    setDeadline(projectDetails.deadline);
  };

  const handleSave = () => {
    dispatch(editProjectDetails({ title, description, deadline }));
    setEditing(false);
    Alert.alert('Changes saved successfully');
  };

  return (
    <View>
      {editing ? (
        <>
          <TextInput
            value={title}
            onChangeText={setTitle}
            placeholder="Project Title"
          />
          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="Project Description"
          />
          <TextInput
            value={deadline}
            onChangeText={setDeadline}
            placeholder="Project Deadline"
          />
          <Button title="Save Changes" onPress={handleSave} />
        </>
      ) : (
        <>
          <Text>Title: {projectDetails.title}</Text>
          <Text>Description: {projectDetails.description}</Text>
          <Text>Deadline: {projectDetails.deadline}</Text>
          <TouchableOpacity onPress={handleEdit}>
            <Text>Edit Project Details</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default ProjectListScreen;