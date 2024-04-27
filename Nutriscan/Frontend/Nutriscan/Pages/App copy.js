import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: object;
  textStyle?: object;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style, textStyle }) => (
  <TouchableOpacity onPress={onPress} style={[{ justifyContent: 'center', alignItems: 'center', paddingVertical: 15, borderRadius: 8, marginTop: 16 }, style]}>
    <Text style={[{ color: '#FFFFFF', fontSize: 16 }, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

const MyComponent: React.FC = () => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 24, paddingTop: 60, alignItems: 'center', backgroundColor: '#FFFFFF' }}>
      <View style={{ height: 282, width: 282, backgroundColor: '#F97316', borderRadius: 141 }} />
      <Text style={{ fontSize: 34, color: '#374151', marginTop: 36 }}>Welcome!</Text>
      <Text style={{ textAlign: 'center', color: '#6B7280', marginTop: 18 }}>
        To help you get started with our app, please fill in your personal information in the next few pages.
      </Text> 
      
      <Button title="Get Started!" onPress={() => {}} style={{ backgroundColor: '#111827' }} />
      <Button title="Skip for now" onPress={() => {}} style={{ backgroundColor: 'rgba(31,41,55,0.2)', borderWidth: 2, borderColor: '#9CA3AF' }} textStyle={{ color: '#374151' }} />
    </View>
  );
};

export default MyComponent;