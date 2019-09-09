import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { Header,Icon,SearchBar,Input,Button,ButtonGroup, Badge} from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation";
import PeopleScreen from './PeopleScreen';
import TagsScreen from './TagsScreen';
import PlacesScreen from './PlacesScreen';
import { TabView, SceneMap } from 'react-native-tab-view';
import RankingScreen from './RankingScreen';

//TODO navバーにスタイルのピンクがついていくようにする
class SearchScreen extends React.Component {

    constructor(props) 
    {
      super(props);
      this.state = {
        index: 0,
        nav: 'default',   
        pressStatus: false,
        isBorderBottom:false,
        selectedIndex: 0,
        search: '',
      };   
      this.updateIndex = this.updateIndex.bind(this);
      // this.searchContents = this.searchContents.bind(this);
    }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  _onHideUnderlay=()=> {
    this.setState({ pressStatus: false });
    }

  _onShowUnderlay=()=> {
  this.setState({ pressStatus: true });
  }

  render(){
    // const { search } = this.state
    // const { selectedIndex } = this.state
    const {navigate} = this.props.navigation;
    // const { nav } = this.state.nav;
    this.searchContents = {
      default : <SearchDefault/>,
      user : <SearchUser/>,
      nearby : <SearchNearBy/>,
      tags : <SearchTags/>,
      ranking : <SearchRanking/>
    };

    this.navDefault = {backgroundColor:'white',width:'25%',height:'100%',padding:'3%'};
    this.navSelect = {backgroundColor:'white',width:'25%',height:'100%',padding:'3%',borderBottomColor:'pink',borderBottomWidth:3};

    return (
      <View>
          <Header
            leftComponent={{ icon: 'camera', color: '#fff' }}
            centerComponent={{ text: 'じょそすたぐらむ', style: { color: '#fff', fontSize:17,fontWeight:'bold' } }}
            rightComponent={{ icon: 'send', color: '#fff' }}
            containerStyle={{
              backgroundColor: 'pink',
              justifyContent: 'space-around',
            }}
          />
    
          {/* //4Top Nav Tabs */}
          <View style={{backgroundColor:'white',width:'100%',height:45,flexDirection:'row'}}>
            <TouchableOpacity 
              key = {0}
              style={this.state.nav == 'user' ? this.navSelect : this.navDefault} 
              onPress={() =>  {this.setState({nav: 'user'})}}
   
            >
              <Text style={{color:'gray',fontSize:14,textAlign:'center',textAlignVertical:'bottom'}}>#ユーザー</Text>  
            </TouchableOpacity>
            <TouchableOpacity 
              key = {1}
              style={this.state.nav == 'nearby' ? this.navSelect : this.navDefault}
              onPress={() =>  {this.setState({nav: 'nearby'})}}

            >
              <Text style={{color:'gray',fontSize:14,textAlign:'center'}}>#近くの人</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              key = {2}
              style={this.state.nav == 'tags' ? this.navSelect : this.navDefault}
              onPress={() =>  {this.setState({nav: 'tags'})}}
            >
                <Text style={{color:'gray',fontSize:14,textAlign:'center'}}>＃タグ</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              key = {3}
              style={this.state.nav == 'ranking' ? this.navSelect : this.navDefault}
              onPress={() =>  {this.setState({nav: 'ranking'})}}

            >
                <Text style={{color:'gray',fontSize:14,textAlign:'center'}}>#注目順</Text>
            </TouchableOpacity>
          </View>

          {/* <ScrollView style={{backgroundColor:'white',paddingLeft:'3%',paddingRight:'3%',paddingTop:'3%', marginTop:5,flexDirection:'row'}}> */}
            {this.searchContents[this.state.nav]}
          {/* </ScrollView> */}
          
        </View>
    );
  }
}

  class SearchDefault extends React.Component{
    render(){
      return(
        <View style={{ alignItems: 'center',justifyContent: 'center', width:'100%', height:'80%'}}>
          <Text style ={{fontSize: 16, fontWeight:'bold', color:'gray'}}>メニューから選択</Text>
        </View>
      );
    }
  }

  
  class SearchUser extends React.Component{
    render(){

      return (

        <ScrollView style={{}}>
          <View style={{flexDirection:'row'}}>
            <View style={{width:'100%',height:'100%'}}>
              <Input placeholder='検索'　leftIcon={<Icon name='search' size={18} color='gray'/>}/>
            </View>
          </View>

          <View style={{flexDirection:'row', alignItems: 'flex-start',flexWrap: 'wrap', width:'100%', height:'100%'}}>

          <TouchableOpacity style={{width:'42%',aspectRatio:1.0, borderRadius:18, margin:'4%', backgroundColor:'white', padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
            <ImageBackground source={require('./assets/insta-loli1.jpg')} style={{width:'100%',aspectRatio:1.0, borderRadius:18,}} >
              <View style={{backgroundColor:'white', width:'100%', height:'30%',top:'70%',opacity:0.5, alignItems: 'center', justifyContent: 'center',}}>
                <Text><Text style={{color:'green'}}>●</Text>名前</Text>     
              </View>
            </ImageBackground>
          </TouchableOpacity>
          
          <TouchableOpacity style={{width:'42%',aspectRatio:1.0, borderRadius:18, margin:'4%', backgroundColor:'white', padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
            <ImageBackground source={require('./assets/insta-loli1.jpg')} style={{width:'100%',aspectRatio:1.0, borderRadius:18,}} >
              <View style={{backgroundColor:'white', width:'100%', height:'30%',top:'70%',opacity:0.5, alignItems: 'center', justifyContent: 'center',}}>
              <Text><Text style={{color:'red'}}>●</Text>名前</Text>   
              </View>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity style={{width:'42%',aspectRatio:1.0, borderRadius:18, margin:'4%', backgroundColor:'white', padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
            <ImageBackground source={require('./assets/insta-loli1.jpg')} style={{width:'100%',aspectRatio:1.0, borderRadius:18,}} >
              <View style={{backgroundColor:'white', width:'100%', height:'30%',top:'70%',opacity:0.5, alignItems: 'center', justifyContent: 'center',}}>
                <Text><Text style={{color:'green'}}>●</Text>名前</Text>     
              </View>
            </ImageBackground>
          </TouchableOpacity>
          
          <TouchableOpacity style={{width:'42%',aspectRatio:1.0, borderRadius:18, margin:'4%', backgroundColor:'white', padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
            <ImageBackground source={require('./assets/insta-loli1.jpg')} style={{width:'100%',aspectRatio:1.0, borderRadius:18,}} >
              <View style={{backgroundColor:'white', width:'100%', height:'30%',top:'70%',opacity:0.5, alignItems: 'center', justifyContent: 'center',}}>
              <Text><Text style={{color:'red'}}>●</Text>名前</Text>   
              </View>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity style={{width:'42%',aspectRatio:1.0, borderRadius:18, margin:'4%', backgroundColor:'white', padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
            <ImageBackground source={require('./assets/insta-loli1.jpg')} style={{width:'100%',aspectRatio:1.0, borderRadius:18,}} >
              <View style={{backgroundColor:'white', width:'100%', height:'30%',top:'70%',opacity:0.5, alignItems: 'center', justifyContent: 'center',}}>
                <Text><Text style={{color:'green'}}>●</Text>名前</Text>     
              </View>
            </ImageBackground>
          </TouchableOpacity>
          
          <TouchableOpacity style={{width:'42%',aspectRatio:1.0, borderRadius:18, margin:'4%', backgroundColor:'white', padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
            <ImageBackground source={require('./assets/insta-loli1.jpg')} style={{width:'100%',aspectRatio:1.0, borderRadius:18,}} >
              <View style={{backgroundColor:'white', width:'100%', height:'30%',top:'70%',opacity:0.5, alignItems: 'center', justifyContent: 'center',}}>
              <Text><Text style={{color:'red'}}>●</Text>名前</Text>   
              </View>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity style={{width:'42%',aspectRatio:1.0, borderRadius:18, margin:'4%', backgroundColor:'white', padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
            <ImageBackground source={require('./assets/insta-loli1.jpg')} style={{width:'100%',aspectRatio:1.0, borderRadius:18,}} >
              <View style={{backgroundColor:'white', width:'100%', height:'30%',top:'70%',opacity:0.5, alignItems: 'center', justifyContent: 'center',}}>
                <Text><Text style={{color:'green'}}>●</Text>名前</Text>     
              </View>
            </ImageBackground>
          </TouchableOpacity>
          
          <TouchableOpacity style={{width:'42%',aspectRatio:1.0, borderRadius:18, margin:'4%', backgroundColor:'white', padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
            <ImageBackground source={require('./assets/insta-loli1.jpg')} style={{width:'100%',aspectRatio:1.0, borderRadius:18,}} >
              <View style={{backgroundColor:'white', width:'100%', height:'30%',top:'70%',opacity:0.5, alignItems: 'center', justifyContent: 'center',}}>
              <Text><Text style={{color:'red'}}>●</Text>名前</Text>   
              </View>
            </ImageBackground>
          </TouchableOpacity>


                {/* <Image source={require('./assets/meidodesu_TP_V.jpg')} style={{ width:'40%',aspectRatio:1.0, borderRadius:18, marginTop:'4%',marginLeft:'4%', marginRight:'4%'}}/>
                <Image source={require('./assets/meidodesu_TP_V.jpg')} style={{ width:'40%',aspectRatio:1.0, borderRadius:18, marginTop:'4%',marginLeft:'4%', marginRight:'4%'}}/>
                <Image source={require('./assets/meidodesu_TP_V.jpg')} style={{ width:'40%',aspectRatio:1.0, borderRadius:18, marginTop:'4%',marginLeft:'4%', marginRight:'4%'}}/>
                <Image source={require('./assets/meidodesu_TP_V.jpg')} style={{ width:'40%',aspectRatio:1.0, borderRadius:18, marginTop:'4%',marginLeft:'4%', marginRight:'4%'}}/>
                <Image source={require('./assets/meidodesu_TP_V.jpg')} style={{ width:'40%',aspectRatio:1.0, borderRadius:18, marginTop:'4%',marginLeft:'4%', marginRight:'4%'}}/>
                <Image source={require('./assets/meidodesu_TP_V.jpg')} style={{ width:'40%',aspectRatio:1.0, borderRadius:18, marginTop:'4%',marginLeft:'4%', marginRight:'4%'}}/> */}


          
              {/* <TouchableOpacity style={styles.card}>
                <Image source={require('./assets/meidodesu_TP_V.jpg')} style={{position:'absolute', height:'100%',width:'100%', borderRadius:18, }}/>
              </TouchableOpacity> */}



           
          </View>
        </ScrollView>
       
      );
    }
  }

  class SearchNearBy extends React.Component{
    render(){
      // const { search } = this.state
      // const { selectedIndex } = this.state
  
      return (
        <ScrollView style={{height:'100%'}}>
          <View style={{flexDirection:'row', alignItems: 'flex-start',flexWrap: 'wrap', width:'100%', height:'100%'}}>
          <TouchableOpacity style={{width:'42%',aspectRatio:1.0, borderRadius:18, margin:'4%', backgroundColor:'pink', padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
            <ImageBackground source={require('./assets/meidodesu_TP_V.jpg')} style={{width:'100%',aspectRatio:1.0, borderRadius:18,}} >
              <View style={{backgroundColor:'white', width:'100%', height:'30%',top:'70%',opacity:0.5, alignItems: 'center', justifyContent: 'center',}}>
                <Text>●オンライン</Text>
              </View>
            </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={{width:'42%',aspectRatio:1.0, borderRadius:18, margin:'4%', backgroundColor:'pink', padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
            <ImageBackground source={require('./assets/insta-loli1.jpg')} style={{width:'100%',aspectRatio:1.0, borderRadius:18,}} >
              <View style={{backgroundColor:'white', width:'100%', height:'30%',top:'70%',opacity:0.5, alignItems: 'center', justifyContent: 'center',}}>
                <Text>●オンライン</Text>
              </View>
            </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={{width:'42%',aspectRatio:1.0, borderRadius:18, margin:'4%', backgroundColor:'pink', padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
            <ImageBackground source={require('./assets/insta-ex1.jpg')} style={{width:'100%',aspectRatio:1.0, borderRadius:18,}} >
              <View style={{backgroundColor:'white', width:'100%', height:'30%',top:'70%',opacity:0.5, alignItems: 'center', justifyContent: 'center',}}>
                <Text>●オンライン</Text>
              </View>
            </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={{width:'42%',aspectRatio:1.0, borderRadius:18, margin:'4%', backgroundColor:'pink', padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
            <ImageBackground source={require('./assets/meidodesu_TP_V.jpg')} style={{width:'100%',aspectRatio:1.0, borderRadius:18,}} >
              <View style={{backgroundColor:'white', width:'100%', height:'30%',top:'70%',opacity:0.5, alignItems: 'center', justifyContent: 'center',}}>
                <Text>●オンライン</Text>
              </View>
            </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={{width:'42%',aspectRatio:1.0, borderRadius:18, margin:'4%', backgroundColor:'pink', padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
            <ImageBackground source={require('./assets/insta-loli1.jpg')} style={{width:'100%',aspectRatio:1.0, borderRadius:18,}} >
              <View style={{backgroundColor:'white', width:'100%', height:'30%',top:'70%',opacity:0.5, alignItems: 'center', justifyContent: 'center',}}>
                <Text>●オンライン</Text>
              </View>
            </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={{width:'42%',aspectRatio:1.0, borderRadius:18, margin:'4%', backgroundColor:'pink', padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
            <ImageBackground source={require('./assets/insta-ex1.jpg')} style={{width:'100%',aspectRatio:1.0, borderRadius:18,}} >
              <View style={{backgroundColor:'white', width:'100%', height:'30%',top:'70%',opacity:0.5, alignItems: 'center', justifyContent: 'center',}}>
                <Text>●オンライン</Text>
              </View>
            </ImageBackground>
            </TouchableOpacity>


            
          </View>
         </ScrollView>
      );
    }
  }

  class SearchTags extends React.Component{
    render(){
      // const { search } = this.state
      // const { selectedIndex } = this.state
  
      return (
        <ScrollView>
          <View style={{flexDirection:'row'}}>
            <View style={{width:'100%',height:'100%'}}>
              <Input placeholder='検索'　leftIcon={<Icon name='search' size={18} color='gray'/>}/>
            </View>
          </View>
        </ScrollView>
      );
    }
  }

  class SearchRanking extends React.Component{
    render(){

      return (
        <View>
          <RankingScreen/>
         
        </View>
       

      );
    }
  }


  const styles = StyleSheet.create({
    welcomeImages:{
      height: Dimensions.get('window').height, 
      width: Dimensions.get('window').width,
      resizeMode: 'cover',
      zIndex: 0,
      position: 'relative',
    },
    title:{
      alignItems: 'center',
      justifyContent: 'center',
      color: 'pink',
      zIndex: 2,
      fontSize:40,
      // position: 'absolute',
      textAlign: 'center',
      textAlignVertical: "center",
      top:'35%',
      left:'30%',
      // fontFamily:'insta-font'  
    },
    text:{
      position: 'absolute',
      height: Dimensions.get('window').height, 
      width: Dimensions.get('window').width,
      backgroundColor:'rgba(0,0,0,0.6)', 
    },
    slide:{
      backgroundColor:'rgba(0,0,0,0.6)',
    },
    image:{
      resizeMode: 'contain',
    },
    carousel:{
      // borderRadius:10,
    },
    storyEnd:{
      width:100,
      height:100,
      backgroundColor:"gray"
    },
    scene: {
      flex: 1,
    },
    card: {
      width:'40%',
      aspectRatio:0.9, 
      backgroundColor:'pink', 
      margin:'4%', 
      borderRadius:18, 
      position:'relative', 
      shadowColor: 'gray', 
      shadowOffset: { width: 12, height: 12 }, 
      shadowOpacity: 0.4, 
      shadowRadius: 5, 
      elevation: 2,

    },
  }
  );
  
  export default SearchScreen;