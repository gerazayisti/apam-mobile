import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Text, Surface, Avatar, Button, useTheme, IconButton } from 'react-native-paper';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const stats = [
    {
        id: '1',
        title: 'Patients',
        value: '12',
        subtitle: 'Aujourd\'hui',
        icon: 'account-group' as const,
        color: '#2196F3',
    },
    {
        id: '2',
        title: 'Demandes',
        value: '3',
        subtitle: 'En attente',
        icon: 'bell-ring' as const,
        color: '#42A5F5',
    },
    {
        id: '3',
        title: 'Messages',
        value: '5',
        subtitle: 'Non lus',
        icon: 'message-text' as const,
        color: '#42A5F5',
    },
];

const nextAppointment = {
    id: '1',
    patientName: 'Sophie Martin',
    time: '10:30',
    type: 'Consultation Vidéo',
    avatar: 'SM',
};

export default function DoctorDashboard() {
    const router = useRouter();
    const theme = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text variant="titleMedium" style={{ color: theme.colors.secondary }}>Bonjour,</Text>
                            <Text variant="headlineMedium" style={{ fontWeight: 'bold', color: '#193759' }}>Dr. Watson</Text>
                        </View>
                        <Avatar.Image size={50} source={{ uri: 'https://i.pravatar.cc/150?img=11' }} />
                    </View>
                </View>

                {/* Stats Overview */}
                <View style={styles.statsContainer}>
                    <TouchableOpacity onPress={() => router.push('/(doctor)/today-patients' as any)}>
                        <Surface style={styles.statCard}>
                            <View style={[styles.statIcon, { backgroundColor: stats[0].color + '20' }]}>
                                <MaterialCommunityIcons name={stats[0].icon} size={24} color={stats[0].color} />
                            </View>
                            <Text variant="displaySmall" style={{ fontWeight: 'bold', marginTop: 8 }}>{stats[0].value}</Text>
                            <Text variant="bodySmall" style={{ color: theme.colors.secondary }}>{stats[0].title}</Text>
                            <Text variant="labelSmall" style={{ color: stats[0].color }}>{stats[0].subtitle}</Text>
                        </Surface>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => router.push('/(doctor)/pending-requests' as any)}>
                        <Surface style={styles.statCard}>
                            <View style={[styles.statIcon, { backgroundColor: stats[1].color + '20' }]}>
                                <MaterialCommunityIcons name={stats[1].icon} size={24} color={stats[1].color} />
                            </View>
                            <Text variant="displaySmall" style={{ fontWeight: 'bold', marginTop: 8 }}>{stats[1].value}</Text>
                            <Text variant="bodySmall" style={{ color: theme.colors.secondary }}>{stats[1].title}</Text>
                            <Text variant="labelSmall" style={{ color: stats[1].color }}>{stats[1].subtitle}</Text>
                        </Surface>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => router.push('/(doctor)/messages' as any)}>
                        <Surface style={styles.statCard}>
                            <View style={[styles.statIcon, { backgroundColor: stats[2].color + '20' }]}>
                                <MaterialCommunityIcons name={stats[2].icon} size={24} color={stats[2].color} />
                            </View>
                            <Text variant="displaySmall" style={{ fontWeight: 'bold', marginTop: 8 }}>{stats[2].value}</Text>
                            <Text variant="bodySmall" style={{ color: theme.colors.secondary }}>{stats[2].title}</Text>
                            <Text variant="labelSmall" style={{ color: stats[2].color }}>{stats[2].subtitle}</Text>
                        </Surface>
                    </TouchableOpacity>
                </View>

                {/* Next Appointment */}
                <View style={styles.section}>
                    <Text variant="titleMedium" style={styles.sectionTitle}>Prochain Rendez-vous</Text>
                    <Surface style={styles.appointmentCard}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Text size={50} label={nextAppointment.avatar} style={{ backgroundColor: theme.colors.primaryContainer }} />
                            <View style={{ marginLeft: 16, flex: 1 }}>
                                <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>{nextAppointment.patientName}</Text>
                                <Text variant="bodyMedium" style={{ color: theme.colors.secondary }}>{nextAppointment.type}</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text variant="titleLarge" style={{ fontWeight: 'bold', color: theme.colors.primary }}>{nextAppointment.time}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#42A5F5', marginRight: 4 }} />
                                    <Text variant="labelSmall" style={{ color: '#42A5F5' }}>Confirmé</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 16, gap: 12 }}>
                            <Button mode="contained" style={{ flex: 1 }} onPress={() => { }}>
                                Démarrer
                            </Button>
                            <Button mode="outlined" style={{ flex: 1 }} onPress={() => { }}>
                                Dossier
                            </Button>
                        </View>
                    </Surface>
                </View>

                {/* Quick Actions */}
                <View style={styles.section}>
                    <Text variant="titleMedium" style={styles.sectionTitle}>Actions Rapides</Text>
                    <View style={styles.actionsGrid}>
                        <TouchableOpacity style={styles.actionButton} onPress={() => router.push('/(doctor)/patients/add' as any)}>
                            <View style={[styles.actionIcon, { backgroundColor: '#E3F2FD' }]}>
                                <MaterialCommunityIcons name="account-plus" size={28} color="#2196F3" />
                            </View>
                            <Text variant="labelMedium" style={{ marginTop: 8 }}>Nouveau Patient</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionButton} onPress={() => router.push('/(doctor)/appointments/create' as any)}>
                            <View style={[styles.actionIcon, { backgroundColor: '#E3F2FD' }]}>
                                <MaterialCommunityIcons name="calendar-plus" size={28} color="#42A5F5" />
                            </View>
                            <Text variant="labelMedium" style={{ marginTop: 8 }}>Nouveau RDV</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionButton} onPress={() => router.push('/(doctor)/prescriptions' as any)}>
                            <View style={[styles.actionIcon, { backgroundColor: '#E3F2FD' }]}>
                                <MaterialCommunityIcons name="file-document-edit" size={28} color="#42A5F5" />
                            </View>
                            <Text variant="labelMedium" style={{ marginTop: 8 }}>Ordonnances</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        gap: 12,
    },
    statCard: {
        flex: 1,
        padding: 16,
        borderRadius: 16,
        backgroundColor: '#FFF',
        alignItems: 'flex-start',
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    statIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    section: {
        marginTop: 24,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        marginBottom: 12,
        fontWeight: 'bold',
        color: '#193759',
    },
    appointmentCard: {
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    actionsGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    actionButton: {
        alignItems: 'center',
        width: (width - 60) / 3,
    },
    actionIcon: {
        width: 64,
        height: 64,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
