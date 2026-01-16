import React from 'react';
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

type StatBadge = {
  key: string;
  label: string;
  backgroundColor: string;
  borderColor: string;
  iconColor: string;
  iconName: keyof typeof Ionicons.glyphMap;
};

type ChallengeCard = {
  key: string;
  title: string;
  description: string;
  gradient: readonly [string, string];
  iconColor: string;
  iconName: string;
  iconLibrary: 'FontAwesome5' | 'MaterialCommunityIcons';
};

const statBadges: StatBadge[] = [
  {
    key: 'lives',
    label: '15',
    backgroundColor: '#FFE4EC',
    borderColor: '#FFC1D5',
    iconColor: '#FF6F91',
    iconName: 'heart',
  },
  {
    key: 'stars',
    label: '09',
    backgroundColor: '#FFF2D6',
    borderColor: '#FFD899',
    iconColor: '#FFB74D',
    iconName: 'star',
  },
  {
    key: 'gems',
    label: '27',
    backgroundColor: '#E7ECFF',
    borderColor: '#C6CEFF',
    iconColor: '#7C8BFF',
    iconName: 'diamond',
  },
];

const challengeCards: ChallengeCard[] = [
  {
    key: 'quiz-challenges',
    title: 'Quiz Challenges',
    description: 'Sharpen your skills with quick puzzles.',
    gradient: ['#FFE8C8', '#FFD3B6'],
    iconColor: '#FF9248',
    iconName: 'puzzle-piece',
    iconLibrary: 'FontAwesome5',
  },
  {
    key: 'personality-quiz',
    title: 'Personality Quiz',
    description: 'Discover fun facts about yourself.',
    gradient: ['#FFD9E8', '#FFC7DE'],
    iconColor: '#FF5D8F',
    iconName: 'account-heart',
    iconLibrary: 'MaterialCommunityIcons',
  },
  {
    key: 'level-quiz',
    title: 'Level Quiz',
    description: 'Level up through themed quizzes.',
    gradient: ['#D9F0FF', '#BEE4FF'],
    iconColor: '#3A8FFF',
    iconName: 'graduation-cap',
    iconLibrary: 'FontAwesome5',
  },
];

const renderChallengeIcon = (card: ChallengeCard) => {
  if (card.iconLibrary === 'FontAwesome5') {
    return <FontAwesome5 name={card.iconName as any} size={32} color={card.iconColor} />;
  }

  return (
    <MaterialCommunityIcons
      name={card.iconName as any}
      size={38}
      color={card.iconColor}
    />
  );
};

export const HomeScreen = () => {
  return (
    <LinearGradient
      colors={['#C4F2FF', '#F6E2FF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.wrapper}>
            <View style={styles.header}>
              <Pressable style={[styles.menuButton, styles.shadowLg]}>
                <Ionicons name="menu" size={26} color="#1F2A44" />
              </Pressable>

              <View style={styles.statList}>
                {statBadges.map((badge, index) => (
                  <View
                    key={badge.key}
                    style={[
                      styles.statChip,
                      {
                        backgroundColor: badge.backgroundColor,
                        borderColor: badge.borderColor,
                        marginLeft: index === 0 ? 0 : 12,
                      },
                    ]}
                  >
                    <Ionicons name={badge.iconName} size={18} color={badge.iconColor} />
                    <Text style={styles.statLabel}>{badge.label}</Text>
                  </View>
                ))}
              </View>
            </View>

            <LinearGradient
              colors={['#73D6FF', '#7F8CFF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[styles.heroCard, styles.shadowMd]}
            >
              <View style={styles.heroIconWrap}>
                <MaterialCommunityIcons name="puzzle" size={42} color="#FFFFFF" />
              </View>
              <Text style={styles.heroTitle}>Let&apos;s Learn Together!</Text>
              <Text style={styles.heroSubtitle}>
                Choose a challenge to dive into playful learning adventures designed just for you.
              </Text>
              <Pressable style={[styles.heroButton, styles.shadowSm]}>
                <Text style={styles.heroButtonText}>Start Now</Text>
              </Pressable>
            </LinearGradient>

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Challenges</Text>
            </View>

            <View style={styles.challengeList}>
              {challengeCards.map((card) => (
                <LinearGradient
                  key={card.key}
                  colors={card.gradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0.7 }}
                  style={[styles.challengeCard, styles.shadowSm]}
                >
                  <Pressable style={styles.challengeContent}>
                    <View style={styles.challengeTextWrap}>
                      <Text style={styles.challengeTitle}>{card.title}</Text>
                      <Text style={styles.challengeDescription}>{card.description}</Text>
                      <View style={styles.challengeButton}>
                        <Text style={styles.challengeButtonText}>Start</Text>
                      </View>
                    </View>

                    <View style={styles.challengeIconWrap}>{renderChallengeIcon(card)}</View>
                  </Pressable>
                </LinearGradient>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  wrapper: {
    paddingHorizontal: 24,
    paddingTop: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuButton: {
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.85)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statChip: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
  },
  statLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2A44',
    marginLeft: 8,
  },
  heroCard: {
    marginTop: 32,
    borderRadius: 28,
    padding: 24,
  },
  heroIconWrap: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 20,
    padding: 12,
    alignSelf: 'flex-start',
  },
  heroTitle: {
    marginTop: 16,
    fontSize: 26,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  heroSubtitle: {
    marginTop: 12,
    fontSize: 16,
    lineHeight: 22,
    color: 'rgba(255,255,255,0.9)',
  },
  heroButton: {
    marginTop: 24,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 999,
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
  },
  heroButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4450FF',
  },
  sectionHeader: {
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2A44',
  },
  challengeList: {
    marginTop: 16,
    gap: 16,
  },
  challengeCard: {
    borderRadius: 26,
  },
  challengeContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  challengeTextWrap: {
    flex: 1,
    paddingRight: 16,
  },
  challengeTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2A2A35',
  },
  challengeDescription: {
    marginTop: 8,
    fontSize: 15,
    color: '#4F4F68',
  },
  challengeButton: {
    marginTop: 18,
    width: 88,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.75)',
    paddingVertical: 8,
  },
  challengeButtonText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    color: '#2A2A35',
  },
  challengeIconWrap: {
    backgroundColor: 'rgba(255,255,255,0.75)',
    borderRadius: 20,
    padding: 14,
  },
  shadowLg: {
    shadowColor: '#1E1E3B',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    elevation: 8,
  },
  shadowMd: {
    shadowColor: '#2741A6',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 12 },
    shadowRadius: 24,
    elevation: 6,
  },
  shadowSm: {
    shadowColor: '#1E2554',
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 16,
    elevation: 4,
  },
});
