import React from 'react';
import { Text, View } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

export function Copyright() {
    return (
        <View>
            <Text style={styles.text}>
                Feito com ❤️ por Tao Hansen
            </Text>
        </View>
    );
}