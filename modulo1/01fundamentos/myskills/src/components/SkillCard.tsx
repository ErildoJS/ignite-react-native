import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

interface SkillCardProps {
  skill: string;
}

export function SkillCard({skill}: SkillCardProps) {
  return (
    <TouchableOpacity key={skill} style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    marginVertical: 10,
    alignItems: 'center',
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
