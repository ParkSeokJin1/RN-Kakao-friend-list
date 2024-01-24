import { ScrollView, View } from "react-native";
import Profile from "./Profile";
import Margin from "./Margin";

const FriendList = ({ data, isOpened }) => {
  return isOpened ? (
    <ScrollView showsVerticalScrollIndicator={false}>
      {data.map((item, index) => (
        <View key={index}>
          <Profile
            uri={item.uri}
            name={item.name}
            introduction={item.introduction}
          />
          <Margin height={13} />
        </View>
      ))}
    </ScrollView>
  ) : null;
};

export default FriendList;
