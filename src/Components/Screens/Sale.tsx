import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useFeed } from '../../Context/FeedContext';
import { styles } from '../../Styles/Styles';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Tabs } from '../Layout/Tabs';

interface BarcodeData {
  type: string;
  data: string;
}

export const Sale = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [barcodeList, setBarcodeList] = useState<BarcodeData[]>([]);
  const { feed, changeFeed } = useFeed();

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({
    type,
    data,
  }: {
    type: string;
    data: string;
  }) => {
    setScanned(true);
    alert(`Código de barras con tipo ${type} y datos ${data} ha sido escaneado!`);
    setBarcodeList((prevList) => [...prevList, { type, data }]);
  };

  if (hasPermission === null) {
    return <View style={styles.container}><Text style={styles.buttontext}>Solicitando permiso para usar la cámara</Text></View>;
  }
  if (hasPermission === false) {
    return <View style={styles.container}><Text style={styles.buttontext}>Sin acceso a la cámara</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ventas</Text>
      <View>
        <BarCodeScanner style={styles.scanner}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        />
      </View>
      {scanned && (
        <TouchableOpacity style={styles.buttonwhite} onPress={() => setScanned(false)}>
          <Text style={styles.buttontextred}>Nuevo Producto</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.buttontext}>Ticket</Text>
      <FlatList
        data={barcodeList}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.ticketItem}>
            <Text style={styles.ticketText}>Tipo: {item.type}</Text>
            <Text style={styles.ticketText}>Código: {item.data}</Text>
          </View>
        )}
      />
      {/* <TouchableOpacity onPress={() => changeFeed(2)}>
        <FontAwesome6 name="circle-arrow-left" size={24} color="white" />
      </TouchableOpacity> */}
      
      <Tabs />
    </View>
  );
};
