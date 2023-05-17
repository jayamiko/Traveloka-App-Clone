import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  DrawerLayoutAndroid,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TabBar, TabView} from 'react-native-tab-view';
import {ICMaps} from '../../assets';
import {ButtonIconOnly, Gap} from '../../components';
import {
  aroundPlace,
  colors,
  facilities,
  hp,
  populerPlace,
  wp,
} from '../../constants';
import {Box} from 'native-base';
import FooterTab from '../../components/molecule/Footer/FooterTab';
import Drawer from '../../components/molecule/Drawer/Drawer';
import CoverImageDetail from '../../components/molecule/Cover/CoverImageDetail';
import IconText from '../../components/atoms/IconText/IconText';
import Stars from '../../components/atoms/Stars/Stars';
import SubTitle from '../../components/atoms/Title/SubTitle';
import Title from '../../components/atoms/Title/Title';
import AlertNotification from '../../components/molecule/Alert/AlertNotification';
import TabContent from '../../components/atoms/TabContent/TabContent';
import IconFacility from '../../components/atoms/IconText/IconFacility';
import Map from '../../components/molecule/Map/Map';

const tabRoutes = [
  {key: 'Di Sekitar Properti', title: 'Di Sekitar Properti'},
  {key: 'Populer di Area Ini', title: 'Populer di Area Ini'},
];

const renderScene = ({route}) => {
  switch (route.key) {
    case 'Di Sekitar Properti':
      return (
        <View>
          <TabContent data={aroundPlace} />
        </View>
      );
    case 'Populer di Area Ini':
      return (
        <View>
          <TabContent data={populerPlace} />
        </View>
      );
    default:
      return null;
  }
};

const HotelDetailScreen = ({route, navigation}) => {
  const {item} = route.params;

  const [index, setIndex] = useState(0);
  const [routes] = useState(tabRoutes);

  const drawer = useRef(null);
  const drawerPosition = 'right';

  const navigationView = () => <Drawer item={item} navigation={navigation} />;

  const note = `Tamu mungkin perlu menunjukkan sertifikat vaksinasi COVID-19 untuk dapat menginap di akomodasi. Silahkan hubungi hotel untuk info lebih lanjut sebelum...`;

  return (
    <SafeAreaView style={styles.saveArea}>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={360}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}>
        <Box flex={1} safeAreaTop style={styles.saveArea}>
          <ScrollView>
            {/* COVER IMAGE */}
            <CoverImageDetail item={item} />
            {/* IDENTITY */}
            <View style={styles.info}>
              <View style={styles.identity}>
                <IconText
                  iconSource={require('../../assets/icon/traveloka-icon-blue.png')}
                  text="Traveloka Preferred Partner"
                  color={colors.blue4}
                  fontSize={12}
                  fontWeight="600"
                />
                {/* Title */}
                <View style={styles.title}>
                  <Title text={item.name} />
                  <Image
                    source={require('../../assets/icon/share-icon.png')}
                    style={{
                      width: 20,
                      height: hp(3),
                    }}
                  />
                </View>
                {/* Category */}
                <View style={[styles.row, {marginVertical: 4}]}>
                  <View style={styles.tag}>
                    <Text style={styles.tagName}>{item.category}</Text>
                  </View>
                  <Gap width={wp(2)} />
                  {/* STARS */}
                  <Stars />
                </View>
                {/* Map */}
                <View style={styles.row}>
                  <ButtonIconOnly
                    icon={<ICMaps width={wp(5)} height={hp(4)} />}
                  />
                  <Text>{item.location}</Text>
                </View>
                {/* Clean Accomodation */}
                <View style={styles.rowStart}>
                  <Image
                    source={require('../../assets/icon/clean-accomodation.png')}
                    style={{width: 20, height: hp(5)}}
                  />
                  <View style={styles.accomodation}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={{fontSize: 12}}>Clean Accomodation</Text>
                      <TouchableOpacity>
                        <Text
                          style={{
                            fontSize: 12,
                            color: colors.blue4,
                            fontWeight: '600',
                          }}>
                          Info Lanjut
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.accomodationInfo}>
                      Akomodasi dengan sertifikat CHSE yang memenuhi protokol
                      kebersihan dari kemenparekraf
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* RATE & REVIEW */}
            <View style={styles.rateView}>
              <SubTitle text="Rating dan Ulasan" />
              <View style={styles.rate}>
                <Text style={{fontWeight: '600'}}>Traveloka</Text>
                <View style={styles.row}>
                  <Image
                    source={require('../../assets/icon/traveloka-icon.png')}
                    style={{width: 20, height: hp(2)}}
                  />

                  <Gap width={wp(2)} />
                  <Text style={[styles.fontMedium, {color: colors.blue2}]}>
                    {item.rate}
                  </Text>
                  <Gap width={wp(2)} />
                  <Text style={{fontSize: 12, color: colors.blue2}}>
                    Mengesankan
                  </Text>
                </View>
                <Text style={{fontSize: 12, color: colors.abuTua}}>
                  Dari ({item.review}) review
                </Text>
              </View>
            </View>

            {/* GUEST LIKE */}
            <View style={styles.guest}>
              <SubTitle text="Hal yang disukai para tamu" />
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {item.likes.map((like, i) => {
                  return (
                    <View key={i} style={styles.likes}>
                      <Text style={{fontSize: 12, color: colors.blue3}}>
                        {like}
                      </Text>
                    </View>
                  );
                })}
              </ScrollView>
            </View>

            {/* HELP REVIEW */}
            <View style={styles.review}>
              <SubTitle text="Review yang Paling Membantu" />
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {item.comments.map((comment, i) => {
                  return (
                    <View key={i} style={styles.comments}>
                      <View>
                        <Text style={{fontSize: 12, color: colors.black}}>
                          {comment.message}
                        </Text>
                        <Text style={{fontSize: 12, color: colors.blue3}}>
                          Lihat Lebih Lengkap
                        </Text>
                      </View>
                      <Text style={styles.username}>{comment.username}</Text>
                    </View>
                  );
                })}
              </ScrollView>
              <TouchableOpacity>
                <Text style={styles.seeDetail}>LIHAT SEMUA REVIEW</Text>
              </TouchableOpacity>
            </View>

            {/* FACILITIES */}
            <View style={styles.facility}>
              <SubTitle text="Fasilitas Umum" />
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={{flexDirection: 'row'}}>
                  {facilities.map((item, i) => {
                    return <IconFacility item={item} index={i} />;
                  })}
                </View>
              </ScrollView>
              <TouchableOpacity>
                <Text style={styles.seeDetail}>LIHAT SEMUA REVIEW</Text>
              </TouchableOpacity>
            </View>

            {/* LOCATION */}
            <View style={styles.location}>
              <SubTitle text="Lokasi" />
              <Map />

              {/* Property Area */}
              <TabView
                navigationState={{index, routes}}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={props => (
                  <TabBar
                    {...props}
                    indicatorStyle={{backgroundColor: colors.blue4}}
                    style={{backgroundColor: colors.white}}
                    activeColor={colors.blue4}
                    inactiveColor={colors.blue4}
                    labelStyle={{textTransform: 'capitalize'}}
                  />
                )}
              />
              <View style={{padding: wp(2)}}>
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.abuMuda,
                  }}>
                  Jarak berikut dihitung berdasarkan garis lurus. Jarak tempuh
                  Sebenarnya dapat bervariasi
                </Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.seeDetail}>SELENGKAPNYA DI PETA</Text>
              </TouchableOpacity>
            </View>

            {/* PROPERTY */}
            <View style={styles.property}>
              <SubTitle text="Kebijakan Properti" />
              <AlertNotification
                text="Pastikan Anda mengetahui waktu yang telah ditentukan untuk check-in & check-out"
                icon={require('../../assets/icon/traveloka-icon.png')}
              />
              <View style={[styles.rowStart, {paddingHorizontal: wp(2)}]}>
                <Image
                  source={require('../../assets/icon/clean-accomodation.png')}
                  style={{width: 32, height: hp(8)}}
                />
                <Gap width={wp(1)} />
                <View style={styles.accomodation}>
                  <View>
                    <Text style={{fontWeight: '500'}}>
                      Waktu Check-in/Check-out
                    </Text>
                  </View>
                  <Text>Waktu Check-In dari 14.:00</Text>
                  <Text>Waktu Check-Out sebelum 11:00</Text>
                </View>
              </View>
              {/* NOTE */}
              <View style={styles.noteImportant}>
                <IconText
                  iconSource={require('../../assets/icon/traveloka-icon-blue.png')}
                  text="Catatan Penting"
                  color={colors.black}
                  fontSize={14}
                  fontWeight="500"
                />
                <View>
                  <Text style={{fontSize: 14, color: colors.blue4}}>
                    {note}
                  </Text>
                  <TouchableOpacity style={{paddingVertical: 6}}>
                    <Text style={{fontWeight: '600', color: colors.blue2}}>
                      Baca Selengkapnya
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* INSTRUCTION */}
              <View style={[styles.rowStart, {paddingHorizontal: wp(2)}]}>
                <Image
                  source={require('../../assets/icon/newspaper.png')}
                  style={{width: 32, height: hp(8)}}
                />
                <Gap width={wp(1)} />
                <View style={styles.accomodation}>
                  <View>
                    <Text style={{fontWeight: '500'}}>
                      Dokumen yang Diperlukan
                    </Text>
                  </View>
                  <Text style={{color: colors.grayMuda}}>
                    Saat chek-in, Anda wajib membawa Boarding Pass. Mohon bawa
                    dokumen dalam bentuk fisik.
                  </Text>
                </View>
                <Image
                  source={require('../../assets/icon/document.png')}
                  style={{width: 32, height: hp(8)}}
                />
                <Gap width={wp(1)} />
                <View style={styles.accomodation}>
                  <View>
                    <Text style={{fontWeight: '500'}}>
                      Petunjuk Umum Check-In
                    </Text>
                  </View>
                  <Text style={{color: colors.grayMuda}}>
                    Hi, Thank you for interest to Hotel Borobudur Jakarta and
                    staying with us. Kindly be informed that every booking room,
                    you manyy get special...
                  </Text>
                </View>
              </View>
              <View style={[styles.rowStart, {paddingHorizontal: wp(2)}]}>
                <Image
                  source={require('../../assets/icon/clean-accomodation.png')}
                  style={{width: 32, height: hp(8)}}
                />
                <View style={styles.accomodation}>
                  <View>
                    <Text style={{fontWeight: '500'}}>Sarapan</Text>
                  </View>
                  <Text style={{color: colors.grayMuda}}>
                    Sarapan di Akomodasi tersedia pukul 06:00 - 10.00
                  </Text>
                </View>
              </View>
              <TouchableOpacity>
                <Text style={styles.seeDetail}>Baca Selengkapnya</Text>
              </TouchableOpacity>
            </View>

            {/* DESKRIPSI */}
            <View style={styles.description}>
              <SubTitle text="Deskripsi" />
              <View>
                <Text style={{color: colors.grayMuda, paddingVertical: hp(1)}}>
                  Lumire Hotel & Convention Center adalah hotel di lokasi yang
                  baik, tepatnya berada di Senen
                </Text>
                <Text style={{color: colors.grayMuda, paddingVertical: hp(1)}}>
                  Resepsionis siap 24 Jam untuk melayani proses check-in dan
                  kebutuhan Anda yang lain. Jangan ragu untuk menghubungi
                  resepsionis, kami siap melayani Anda.
                </Text>
                <Text style={{color: colors.grayMuda, paddingVertical: hp(1)}}>
                  WiFi tersedia di seluruh area publik properti untuk membantu
                  Anda tetao terhubung dengan keluarga dan teman
                </Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.seeDetail}>LIHAT DETAIL</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          {/* FOOTER TAB */}
          <FooterTab drawer={drawer} item={item} />
        </Box>
      </DrawerLayoutAndroid>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  saveArea: {
    width: 360,
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: colors.white,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowStart: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  fontMedium: {
    fontSize: 16,
    fontWeight: '600',
  },
  textCenter: {
    fontSize: 12,
    color: colors.grayMuda,
    textAlign: 'center',
  },
  info: {
    height: 240,
    marginHorizontal: wp(2),
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: colors.abuMuda,
  },
  identity: {
    color: colors.black,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: wp(2),
  },
  tag: {
    height: 25,
    borderWidth: 1.5,
    borderColor: colors.blue2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 8,
  },
  tagName: {
    color: colors.blue2,
    fontSize: wp(3),
  },
  accomodation: {
    width: '92%',
    paddingHorizontal: wp(2),
    paddingTop: wp(2),
    fontSize: wp(4),
  },
  accomodationInfo: {
    maxWidth: '75%',
    color: colors.grayMuda,
    fontSize: 12,
  },
  rateView: {
    height: 130,
    marginHorizontal: wp(2),
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: colors.abuMuda,
  },
  rate: {
    marginTop: 8,
  },
  guest: {
    height: 100,
    marginHorizontal: wp(2),
    paddingVertical: hp(2),
  },
  likes: {
    height: 30,
    marginTop: 10,
    marginRight: 8,
    backgroundColor: colors.abu,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  review: {
    height: 240,
    marginHorizontal: wp(2),
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: colors.abuMuda,
  },
  username: {
    fontSize: 12,
    color: colors.grayMuda,
    textAlign: 'right',
  },
  comments: {
    width: 260,
    height: 120,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginRight: 8,
    backgroundColor: colors.abu,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2.5,
    overflow: 'hidden',
  },
  facility: {
    height: 200,
    marginHorizontal: wp(2),
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: colors.abuMuda,
  },
  property: {
    height: 600,
    padding: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: colors.abuMuda,
  },
  location: {
    height: 650,
    marginHorizontal: wp(2),
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: colors.abuMuda,
  },
  noteImportant: {
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#ABD7EB',
    height: 140,
    marginVertical: 20,
    borderLeftWidth: 6,
    borderColor: colors.blue3,
    paddingHorizontal: wp(2),
  },
  description: {
    height: 280,
    paddingHorizontal: wp(2),
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: colors.abuMuda,
  },
  seeDetail: {
    fontWeight: '500',
    fontSize: 14,
    color: colors.blue4,
    textAlign: 'center',
    marginVertical: hp(2),
  },
});

export default HotelDetailScreen;
