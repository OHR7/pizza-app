import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { FontAwesome} from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';


const HomeScreen = props => {

    const categories = ['Popular', 'Meat', 'Vegetarian', 'Chicago', 'Cheese', 'Sicilian']
    const cards = [
        {title: 'Supreme Pizza', price: '8.60', image: 'product-9'},
        {title: 'Extreme Pizza', price: '7.60', image: 'product-10'},
        {title: 'Mega Pizza', price: '9.60', image: 'product-11'},
        {title: 'Ultra Pizza', price: '10.60', image: 'product-12'},
    ]

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.subContainer}>
            <View style={styles.headerContainer}>
                <View style={{flexDirection: 'row'}}>
                    <Image
                        source={require('../assets/hand-emoji.png')}
                        style={styles.headerEmoji}
                    />
                    <View>
                        <Text>Good Morning</Text>
                        <Text style={styles.headerName}>Omar H</Text>
                    </View>
                </View>
                <FontAwesome 
                    name='bell'
                    style={styles.bellIcon}
                    color='#E4643B'
                    size={25}
                />
            </View>
            <View style={styles.inputContainer}>
                <View style={{flexDirection: 'row'}}>
                    <FontAwesome 
                        name='search'
                        style={styles.searchIcon}
                        color='black'
                        size={25}
                    />
                    <TextInput
                        placeholder='Search'
                    >
                    </TextInput>
                </View>
                <FontAwesome 
                    name='bars'
                    style={styles.searchIcon}
                    color='black'
                    size={25}
                />
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {
                    categories.map((value) => {
                        return (
                            <View style={styles.categoryContainer} key={value}>
                                <Text style={styles.categoryText}>{value}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.cardsContainer}
            >
                <TouchableOpacity 
                    style={styles.card}
                    onPress={() => {
                        props.navigation.navigate({name: 'Product'})
                    }}
                >
                    <Image
                        source={require('../assets/product-9.png')}
                        style={styles.cardImage}
                    />
                    <Text style={styles.cardTitle}>Supreme Pizza</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                        <Image
                            source={require('../assets/ok-emoji.png')}
                            style={styles.okEmoji}
                        />
                        <Text style={styles.okText}>Non Veg</Text>
                    </View>
                    <View style={styles.bottomContainer}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.priceSymbol}>$</Text>
                            <Text style={styles.priceText}>8.60</Text>
                        </View>
                        <LinearGradient 
                            style={styles.likeContainer}
                            colors={['#FFA98D', '#E4643B']}
                        >
                            <FontAwesome 
                                name='heart'
                                style={styles.heartIcon}
                                color='white'
                                size={18}
                            />
                        </LinearGradient>
                    </View>
                </TouchableOpacity>
                <View style={styles.card}>
                    <Image
                        source={require('../assets/product-10.png')}
                        style={styles.cardImage}
                    />
                    <Text style={styles.cardTitle}>Mega Pizza</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                        <Image
                            source={require('../assets/ok-emoji.png')}
                            style={styles.okEmoji}
                        />
                        <Text style={styles.okText}>Non Veg</Text>
                    </View>
                    <View style={styles.bottomContainer}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.priceSymbol}>$</Text>
                            <Text style={styles.priceText}>7.40</Text>
                        </View>
                        <LinearGradient 
                            style={styles.likeContainer}
                            colors={['#FFA98D', '#E4643B']}
                        >
                            <FontAwesome 
                                name='heart'
                                style={styles.heartIcon}
                                color='white'
                                size={18}
                            />
                        </LinearGradient>
                    </View>
                </View>
                <View style={styles.card}>
                    <Image
                        source={require('../assets/product-11.png')}
                        style={styles.cardImage}
                    />
                    <Text style={styles.cardTitle}>Ultra Pizza</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                        <Image
                            source={require('../assets/ok-emoji.png')}
                            style={styles.okEmoji}
                        />
                        <Text style={styles.okText}>Non Veg</Text>
                    </View>
                    <View style={styles.bottomContainer}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.priceSymbol}>$</Text>
                            <Text style={styles.priceText}>9.80</Text>
                        </View>
                        <LinearGradient 
                            style={styles.likeContainer}
                            colors={['#FFA98D', '#E4643B']}
                        >
                            <FontAwesome 
                                name='heart'
                                style={styles.heartIcon}
                                color='white'
                                size={18}
                            />
                        </LinearGradient>
                    </View>
                </View>
                
            </ScrollView>
            <View style={styles.nearContainer}>
                <View>
                    <Text style={styles.nearTitle}>Near You</Text>
                    <Text style={styles.nearSubTitle}>46+ Restaurants</Text>
                </View>
                <Text style={styles.viewAllText}>View All</Text>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.restaurantCardsContainer}
            >
                <View style={styles.restaurantCardContainer}>
                    <Image
                        source={require('../assets/dominos1.png')}
                        style={styles.restaurantCardImage}
                        backgroundColor='white'
                        borderRadius='10'
                    />
                    <View>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>Pizza Hut</Text>
                        <Text style={{color: 'grey', fontSize: 12, marginVertical: 5}}>9:00 am - 10:00 pm</Text>
                        <View style={{flexDirection: 'row'}}>
                            <FontAwesome 
                                name='star'
                                style={{marginRight: 3}}
                                color='black'
                                size={18}
                            />
                            <Text style={{marginRight: 10}}>4.8</Text>
                            <FontAwesome 
                                name='map-marker'
                                style={{marginRight: 3}}
                                color='black'
                                size={18}
                            />
                            <Text>1.5km</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.restaurantCardContainer}>
                    <Image
                        source={require('../assets/pizza-hut.jpg')}
                        style={styles.restaurantCardImage}
                        backgroundColor='white'
                        borderRadius='10'
                    />
                    <View>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>Pizza Hut</Text>
                        <Text style={{color: 'grey', fontSize: 12, marginVertical: 5}}>9:00 am - 10:00 pm</Text>
                        <View style={{flexDirection: 'row'}}>
                            <FontAwesome 
                                name='star'
                                style={{marginRight: 3}}
                                color='black'
                                size={18}
                            />
                            <Text style={{marginRight: 10}}>4.8</Text>
                            <FontAwesome 
                                name='map-marker'
                                style={{marginRight: 3}}
                                color='black'
                                size={18}
                            />
                            <Text>1.5km</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.restaurantCardContainer}>
                    <Image
                        source={require('../assets/little.jpg')}
                        style={styles.restaurantCardImage}
                        backgroundColor='white'
                        borderRadius='10'
                    />
                    <View>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>Pizza Hut</Text>
                        <Text style={{color: 'grey', fontSize: 12, marginVertical: 5}}>9:00 am - 10:00 pm</Text>
                        <View style={{flexDirection: 'row'}}>
                            <FontAwesome 
                                name='star'
                                style={{marginRight: 3}}
                                color='black'
                                size={18}
                            />
                            <Text style={{marginRight: 10}}>4.8</Text>
                            <FontAwesome 
                                name='map-marker'
                                style={{marginRight: 3}}
                                color='black'
                                size={18}
                            />
                            <Text>1.5km</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            </View>
            <View style={styles.navigation}>
                <View style={{flexDirection: 'row', flex: 1.2}}>
                    <FontAwesome 
                        name='home'
                        style={{marginRight: 3}}
                        color='#E4643B'
                        size={30}
                    />
                    <Text style={{color: 'white', alignSelf: 'center', marginLeft: 5, fontWeight: 'bold'}}>Home</Text>
                </View>
                <View style={{alignItems:'center', flex: 1}}>
                    <FontAwesome 
                        name='shopping-basket'
                        style={{marginRight: 3}}
                        color='grey'
                        size={30}
                    />
                </View>
                <View style={{alignItems:'center', flex: 1}}>
                    <FontAwesome 
                        name='map-marker'
                        style={{marginRight: 3}}
                        color='grey'
                        size={30}
                    />
                </View>
                <View style={{alignItems:'center', flex: 1}}>
                    <FontAwesome 
                        name='user'
                        style={{marginRight: 3}}
                        color='grey'
                        size={30}
                    />
                </View>
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'black',
    },
    subContainer: {
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 20,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        alignItems: 'center'
    },
    headerEmoji: {
        height: 40,
        width: 40,
        marginRight: 10
    },
    headerName: {
        fontWeight: 'bold',
        fontSize: 25
    },
    bellIcon: {
        marginRight: 20
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f0f0f0',
        padding: 10,
        margin: 10
    },
    searchIcon: {
        marginRight: 15
    },
    categoryContainer: {
        paddingHorizontal: 10
    },
    categoryText: {
        fontSize: 18
    },
    cardsContainer: {
        marginLeft: 25
    },
    card: {
        width: 160,
        backgroundColor: '#f0f0f0',
        paddingBottom: 15,
        paddingTop: 85,
        paddingHorizontal: 15,
        overflow: 'visible',
        zIndex: 10,
        marginTop: 50,
        marginRight: 20,
        borderRadius: 10
    },
    cardImage: {
        height: 110,
        width: 110,
        position: 'absolute',
        left: 23,
        top: -35
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    okEmoji: {
        height: 25,
        width: 25
    },
    okText: {
        color: 'grey',
        fontSize: 15
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    priceSymbol: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    priceText: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    likeContainer: {
        padding: 8,
        borderRadius: 8
    },
    nearContainer: {
        flexDirection: 'row', 
        alignItems: 'flex-end', 
        justifyContent: 'space-between',
        marginHorizontal: 25,
        marginVertical: 15
    },
    nearTitle: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    nearSubTitle: {
        color: 'lightgrey',
        fontWeight: 'bold',
        fontSize: 18,
    },
    viewAllText: {
        color: 'lightgrey',
    },
    restaurantCardsContainer: {
        marginLeft: 25
    },
    restaurantCardContainer: {
        backgroundColor: '#f0f0f0',
        padding: 15,
        paddingRight: 50,
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
        marginRight: 15
    },
    restaurantCardImage: {
        height: 50,
        width: 50,
        marginRight: 10
    },
    navigation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 30
    }
})

export default HomeScreen
