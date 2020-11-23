import { useRoute } from '@react-navigation/native';
import React from 'react';
import { FlatList, ImageBackground, View } from 'react-native';
import ChatMessage from '../components/ChatMessage';
import Chats from '../data/Chats';
import BG from '../assets/images/BG.png'
import InputBox from '../components/InputBox';

export type ChatRoomScreenProps = {}

const ChatRoomScreen = (props: ChatRoomScreenProps) => {
    const route = useRoute()

    return (
        <ImageBackground style={{ width: '100%', height: '100%' }} source={BG}>
            <FlatList
                data={Chats.messages}
                renderItem={({ item }) => (<ChatMessage message={item} />)}
                inverted
            />

            <InputBox />
        </ImageBackground>
    );
};

export default ChatRoomScreen;
