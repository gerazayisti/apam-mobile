import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Surface, Searchbar, IconButton, useTheme, Avatar, Badge } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const conversations = [
    {
        id: '1',
        patientId: 'p1',
        patientName: 'Sophie Martin',
        avatar: 'SM',
        lastMessage: 'Merci docteur, je me sens mieux',
        timestamp: '10:30',
        unread: 2,
    },
    {
        id: '2',
        patientId: 'p2',
        patientName: 'Jean Dupont',
        avatar: 'JD',
        lastMessage: 'J\'ai une question sur mon traitement',
        timestamp: 'Hier',
        unread: 0,
    },
    {
        id: '3',
        patientId: 'p3',
        patientName: 'Marie Leclerc',
        avatar: 'ML',
        lastMessage: 'Pouvez-vous renouveler mon ordonnance ?',
        timestamp: '15/03',
        unread: 1,
    },
];

export default function MessagesScreen() {
    const theme = useTheme();
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <IconButton icon="arrow-left" onPress={() => router.back()} />
                    <Text variant="headlineSmall" style={{ fontWeight: 'bold', color: '#193759' }}>
                        Messagerie
                    </Text>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Searchbar
                    placeholder="Rechercher une conversation"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                    style={styles.searchBar}
                    elevation={0}
                />

                {conversations.map((conv) => (
                    <Surface
                        key={conv.id}
                        style={styles.conversationCard}
                        onTouchEnd={() => router.push(`/(doctor)/messages/${conv.patientId}` as any)}
                    >
                        <View style={styles.conversationHeader}>
                            <Avatar.Text
                                size={56}
                                label={conv.avatar}
                                style={{ backgroundColor: '#E3F2FD' }}
                                labelStyle={{ color: '#42A5F5' }}
                            />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>
                                    {conv.patientName}
                                </Text>
                                <Text
                                    variant="bodyMedium"
                                    style={{ color: theme.colors.secondary, marginTop: 4 }}
                                    numberOfLines={1}
                                >
                                    {conv.lastMessage}
                                </Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text variant="bodySmall" style={{ color: theme.colors.secondary }}>
                                    {conv.timestamp}
                                </Text>
                                {conv.unread > 0 && (
                                    <Badge style={{ backgroundColor: theme.colors.primary, marginTop: 8 }}>
                                        {conv.unread}
                                    </Badge>
                                )}
                            </View>
                        </View>
                    </Surface>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingTop: 50,
        paddingBottom: 16,
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    content: {
        padding: 20,
    },
    searchBar: {
        marginBottom: 16,
        backgroundColor: '#F5F5F5',
    },
    conversationCard: {
        padding: 16,
        borderRadius: 16,
        backgroundColor: '#FFF',
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    conversationHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
