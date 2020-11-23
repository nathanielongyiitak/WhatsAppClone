import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

export type ChatRoomScreenProps = {}

const ChatRoomScreen = (props: ChatRoomScreenProps) => {
    const route = useRoute()

    return (
        <View>
            <Text>ChatRoomScreen</Text>
        </View>
    );
};

export default ChatRoomScreen;
