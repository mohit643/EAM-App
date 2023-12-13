import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native"
import { bgColor } from "../../color";
import { Ionicons, AntDesign, MaterialCommunityIcons, FontAwesome6, Feather } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const Documents = () => {
    const [documentHide, setDocumentHide] = useState(true);
    const [reportsHide, setReportsHide] = useState(true);
    const list = [
        { id: 1, Description: 'EAM Support Site', Filename: 'eamcom/filename', Type: 'JPEG', },
        { id: 2, Description: 'EAM Support Site', Filename: 'eamcom/filename', Type: 'JPEG', },
        { id: 3, Description: 'EAM Support Site', Filename: 'eamcom/filename', Type: 'JPEG', },
        { id: 4, Description: 'EAM Support Site', Filename: 'eamcom/filename', Type: 'JPEG', },
        { id: 5, Description: 'EAM Support Site', Filename: 'eamcom/filename', Type: 'JPEG', },
        { id: 6, Description: 'EAM Support Site', Filename: 'eamcom/filename', Type: 'JPEG', },
        { id: 7, Description: 'EAM Support Site', Filename: 'eamcom/filename', Type: 'JPEG', },
        { id: 8, Description: 'EAM Support Site', Filename: 'eamcom/filename', Type: 'JPEG', },
        { id: 9, Description: 'EAM Support Site', Filename: 'eamcom/filename', Type: 'JPEG', },
        { id: 10, Description: 'EAM Support Site', Filename: 'eamcom/filename', Type: 'JPEG', },
    ]

    const DocumentsHide = () => {
        setDocumentHide(!documentHide);
    }
    const ReportsHide = () => {
        setReportsHide(!reportsHide);
    }
    return (
        <>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' }}>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: '700' }}>
                        Documents
                    </Text>
                </View>
                <View >
                    <TouchableOpacity>
                        <AntDesign name='minuscircleo' size={16} color={bgColor} onPress={DocumentsHide} />
                    </TouchableOpacity>

                </View>
            </View>
            <View style={{ borderBottomWidth: 1, }} />
            {documentHide && (
                <View style={{ padding: 10 }}>
                    <View style={styles.tableHeader}>
                        <View style={{ width: 120 }}>
                            <Text style={styles.text}>Description</Text>
                        </View>
                        <View style={{ width: 110 }}>
                            <Text style={styles.text}>Filename</Text>
                        </View>
                        <View style={{ width: 85 }}>
                            <Text style={styles.text}>Type</Text>
                        </View>
                    </View>
                    <View style={{ height: hp('20%') }}>
                        <FlatList
                            data={list}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item, index }) => (
                                <View style={[styles.cell, { backgroundColor: index % 2 === 0 ? 'white' : '#F8F8F8' }]}>
                                    <View style={{ width: 102 }}>
                                        <Text style={styles.innertext}>{item?.Description}</Text>
                                    </View>
                                    <View style={{ width: 90 }}>
                                        <Text style={[styles.innertext,]}>{item?.Filename}</Text>
                                    </View>
                                    <View style={{ width: 40 }}>
                                        <View style={{ flexDirection: 'row', gap: 8 }}>
                                            <Text style={styles.innertext}>{item?.Type}</Text>
                                            <MaterialCommunityIcons name='eye' size={16} color={bgColor} />
                                            <MaterialCommunityIcons name='download' size={16} color={bgColor} />
                                        </View>

                                    </View>
                                </View>
                            )}
                        />

                    </View>
                </View>
            )}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center', }}>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: '700' }}>
                        Reports
                    </Text>
                </View>
                <View >
                    <TouchableOpacity onPress={ReportsHide}>
                        <AntDesign name='minuscircleo' size={16} color={bgColor} />
                    </TouchableOpacity>

                </View>
            </View>
            <View style={{ borderBottomWidth: 1, }} />
            {reportsHide && (
                <View style={{ padding: 10 }}>
                    <View style={styles.tableHeader}>
                        <View >
                            <Text style={styles.text}>Description</Text>
                        </View>

                    </View>
                    <View style={{}}>
                        <FlatList
                            data={list}
                            style={{ height: hp('20%') }}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item, index }) => (
                                <View style={[styles.cell, { backgroundColor: index % 2 === 0 ? 'white' : '#F8F8F8', justifyContent: 'space-between' }]}>
                                    <View >
                                        <Text style={styles.innertext}>{item?.Description}</Text>
                                    </View>

                                    <View style={{ width: 50 }}>
                                        <View style={{ flexDirection: 'row', gap: 8 }}>
                                            <Text style={styles.innertext}>{item?.Type}</Text>
                                        </View>
                                    </View>
                                </View>
                            )}
                        />

                    </View>
                </View>
            )}

        </>
    )
};
const styles = StyleSheet.create({
    headerText: {
        fontSize: 18,
        fontWeight: '700',
    },

    cell: {
        backgroundColor: 'white',
        flexDirection: 'row',
        gap: 20,
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 20
    },
    innertext: {
        fontSize: 13,
        fontWeight: '400',
    },
    text: {
        fontSize: 15,
        fontWeight: '700',
    },
    containe: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        paddingBottom: 10
    },
    tableHeader: {
        backgroundColor: '#DCDCDC',
        flexDirection: 'row',
        // gap: 40,
        padding: 20,
    },

})
export default Documents;