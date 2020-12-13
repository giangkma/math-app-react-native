import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, TextInput } from "react-native";
import * as Animatable from "react-native-animatable";

const InputReactHook = ({
    aref,
    name,
    placeholder,
    style,
    control,
    defaultValue,
    error,
    secureTextEntry,
}) => {
    const { colors } = useTheme();
    return (
        <>
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                render={({ onChange, value }) => (
                    <TextInput
                        onChangeText={(text) => onChange(text)}
                        value={value}
                        placeholderTextColor={colors.placeholderTextColor}
                        style={style}
                        ref={aref}
                        secureTextEntry={secureTextEntry}
                        placeholder={placeholder}
                    />
                )}
            />
            {error && (
                <Animatable.Text
                    animation="fadeInLeft"
                    duration={500}
                    style={styles.errorMsg}
                >
                    {error.message}
                </Animatable.Text>
            )}
        </>
    );
};
const styles = StyleSheet.create({
    errorMsg: {
        color: "#FF0000",
        fontSize: 14,
    },
});
export default React.memo(InputReactHook);
