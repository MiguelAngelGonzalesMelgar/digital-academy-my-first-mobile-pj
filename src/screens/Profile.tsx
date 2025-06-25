import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.imageContainer} testID="image container">
          <Image
            source={require('../../assets/mockProfile.jpg')}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.profileDataContainer} testID="data contianer">
          <View testID="data text ontainer">
            <Text style={styles.profileName}>John Doe</Text>
            <Text style={styles.profileBio}>Movie Enthusiast</Text>
          </View>
          <Pressable style={styles.shareButton} testID="button container">
            <Icon name="share-social-outline" size={20} color="gray" />
            <Text style={styles.shareButtonText}>Share Profile</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Icon name="star-outline" size={20} color="#F3C15D" />
          <Text style={styles.statNumber}>127</Text>
          <Text style={styles.statLabel}>Movies Watched</Text>
        </View>
        <View style={styles.statItem}>
          <Icon name="heart-outline" size={20} color="#F3C15D" />
          <Text style={styles.statNumber}>23</Text>
          <Text style={styles.statLabel}>Movies Wishlist</Text>
        </View>
        <View style={styles.statItem}>
          <Icon name="pricetag-outline" size={20} color="#F3C15D" />
          <Text style={styles.statNumber}>8</Text>
          <Text style={styles.statLabel}>Collections</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.divider} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityList}>
          <Text style={styles.activityText}>
            - Added "Dune: Part Two" to Watchlist
          </Text>
          <Text style={styles.activityText}>- Created "Sci-Fi" collection</Text>
          <Text style={styles.activityText}>- Watched "Oppenheimer"</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    borderRadius: 50,
    overflow: 'hidden',
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#F3C15D',
  },
  profileImage: {
    width: 100,
    height: 100,
  },
  profileDataContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  profileName: {
    fontFamily: 'Gilroy-bold',
    fontSize: 24,
    marginBottom: 5,
    color: '#fff',
  },
  profileBio: {
    fontFamily: 'Gilroy-Regular',
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  shareButtonText: {
    fontFamily: 'Gilroy-Regular',
    color: 'gray',
    marginLeft: 5,
    fontSize: 14,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginVertical: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontFamily: 'Gilroy-bold',
    fontSize: 22,
    marginTop: 5,
    color: '#fff',
  },
  statLabel: {
    fontFamily: 'Gilroy-Light',
    fontSize: 14,
    color: 'gray',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontFamily: 'Gilroy-bold',
    fontSize: 20,
    marginBottom: 10,
    color: '#fff',
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  settingsText: {
    fontFamily: 'Gilroy-Regular',
    fontSize: 16,
    marginLeft: 10,
    color: '#fff',
  },
  activityList: {
    marginLeft: 10,
  },
  activityText: {
    fontFamily: 'Gilroy-Regular',
    fontSize: 15,
    marginBottom: 5,
    color: '#fff',
  },
});

export default ProfileScreen;
