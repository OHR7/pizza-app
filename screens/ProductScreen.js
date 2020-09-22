import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { FontAwesome} from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';

const ProductScreen = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.subContainer}>
                <View style={{backgroundColor: '#f0f0f0', paddingBottom: 15}}>
                    <View style={styles.navbar}>
                        <View style={styles.whiteIconContainer}>
                            <FontAwesome 
                                name='chevron-left'
                                color='#E4643B'
                                size={20}
                            />
                        </View>
                        <View style={styles.whiteIconContainer}>
                            <FontAwesome 
                                name='shopping-basket'
                                color='#E4643B'
                                size={16}
                            />
                        </View>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                            source={require('../assets/product-11.png')}
                            style={styles.productImage}
                        />
                    </View>
                </View>
                <View style={styles.badgesContainer}>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>8 inc</Text>
                    </View>
                    <LinearGradient 
                        style={styles.badgeActive}
                        colors={['#FFA98D', '#E4643B']}
                    >
                        <Text style={styles.badgeActiveText}>10 inc</Text>
                    </LinearGradient>

                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>12 inc</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25, paddingVertical: 15, backgroundColor: '#f0f0f0',}}>
                    <Text style={styles.productTitle}>Supreme Pizza</Text>
                    <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                        <LinearGradient 
                            style={styles.colorIconContainer}
                            colors={['#FFA98D', '#E4643B']}
                        >
                            <FontAwesome 
                                name='minus'
                                color='white'
                                size={20}
                            />
                        </LinearGradient>
                        <Text style={{fontSize: 20, fontWeight: 'bold', marginHorizontal: 10}}>on</Text>
                        <LinearGradient 
                            style={styles.colorIconContainer}
                            colors={['#FFA98D', '#E4643B']}
                        >
                            <FontAwesome 
                                name='plus'
                                color='white'
                                size={20}
                            />
                        </LinearGradient>
                    </View>
                </View>
                <View style={styles.labelsContainer}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            source={require('../assets/ok-emoji.png')}
                            style={styles.okEmoji}
                        />
                        <Text style={styles.okText}>Non Veg</Text>
                    </View>
                    <Text style={styles.okText}>Choose Drink's</Text>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{marginHorizontal: 25}}
                >
                    <View style={styles.sodaContainer}>
                        <View style={styles.sodaBadge}>
                            <Text>$1.50</Text>
                        </View>
                        <Image
                            source={require('../assets/coke.png')}
                            style={styles.sodaImg}
                        />
                    </View>
                    <View style={styles.sodaContainer}>
                        <View style={styles.sodaBadge}>
                            <Text>$1.50</Text>
                        </View>
                        <Image
                            source={require('../assets/7up.png')}
                            style={styles.sodaImg}
                        />
                    </View>
                    <View style={styles.sodaContainer}>
                        <View style={styles.sodaBadge}>
                            <Text>$1.50</Text>
                        </View>
                        <Image
                            source={require('../assets/fanta.png')}
                            style={styles.sodaImg}
                        />
                    </View>
                    <View style={styles.sodaContainer}>
                        <View style={styles.sodaBadge}>
                            <Text>$1.50</Text>
                        </View>
                        <Image
                            source={require('../assets/cherry.png')}
                            style={styles.sodaImg}
                        />
                    </View>
                </ScrollView>
            </View>  
            <View style={styles.navigation}>
                <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>$</Text>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 35}}>8.60</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                <   LinearGradient 
                        style={styles.colorIconContainer}
                        colors={['#FFA98D', '#E4643B']}
                    >
                        <FontAwesome 
                            name='shopping-basket'
                            color='white'
                            size={20}
                        />
                    </LinearGradient>
                    <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 5}}>Add to Cart</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'black',
        paddingHorizontal: 20
    },
    subContainer: {
        backgroundColor: 'white',
        paddingBottom: 10,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 10
    },
    whiteIconContainer: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
    },
    colorIconContainer: {
        backgroundColor: '#E4643B',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
    },
    productImage: {
        height: 220,
        width: 220,
    },
    badgesContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 15
    },
    badge: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 16,
    },
    badgeActive: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        backgroundColor: '#E4643B',
        borderRadius: 16,
        marginHorizontal: 15
    },
    badgeText: {
        color: 'grey',
        fontWeight: 'bold'
    },
    badgeActiveText: {
        color: 'white',
        fontWeight: 'bold'
    },
    productTitle: {
        fontWeight: 'bold',
        fontSize: 28
    },
    okEmoji: {
        height: 35,
        width: 35
    },
    okText: {
        color: 'grey',
        fontSize: 15
    },
    labelsContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingHorizontal: 25,
        paddingVertical: 5
    },
    sodaContainer: {
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 20,
        borderRadius: 15,
        marginBottom: 20,
        marginRight: 20,
        backgroundColor: '#f0f0f0',
    },
    sodaImg: {
        height: 60,
        width: 60
    },
    sodaBadge: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 10,
        position: 'absolute',
        bottom: -10,
        left: '20%',
    },
    navigation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 30
    }
})

export default ProductScreen
