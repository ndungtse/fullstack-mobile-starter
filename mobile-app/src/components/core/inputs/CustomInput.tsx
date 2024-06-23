import React, { useState } from "react";
import {
  KeyboardTypeOptions,
  Pressable,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from "react-native";
import TextField from "./TextField";
import { cn } from "@/utils/cn";
import { getStyles } from "@/utils/funcs/components";
import { Feather } from "@expo/vector-icons";

interface Props {
  onChange?: (text: string) => void;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  placeholder?: string;
  type?: "text" | "password" | "secure-text";
  className?: string;
  style?: StyleProp<ViewStyle>;
  label?: string;
}

const CustomInput = (props: Props) => {
  const {
    onChange,
    type,
    leftSection,
    style,
    secureTextEntry,
    keyboardType,
    placeholder,
    rightSection,
    className,
    label,
  } = props;
  const [focused, setFocused] = useState(false);
  const [showPass, setShowPass] = useState(!secureTextEntry);

  const _style = getStyles(style);

  return (
    <View className="flex-col" style={_style}>
      {label ? (
        <Text
          className={cn(
            "p-1 text-base font-semibold",
            focused ? " text-primary" : "text-black"
          )}
        >
          {label}
        </Text>
      ) : null}
      <View
        className={cn(
          "flex-row items-center border-2 p-1 rounded-md",
          focused ? "border-primary" : "border-gray-300"
        )}
      >
        {leftSection}
        <TextField
          onChangeText={onChange}
          keyboardType={keyboardType ?? "default"}
          className={cn(" flex-1 flex-row items-center outline-none p-1")}
          style={{ color: "black" }}
          secureTextEntry={!showPass}
          placeholder={placeholder}
          type={type}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {secureTextEntry ? (
          <Pressable onPress={() => setShowPass(!showPass)} className="">
            {showPass ? (
              <Feather name="eye" size={22} color="black" />
            ) : (
              <Feather name="eye-off" size={22} color="black" />
            )}
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

export default CustomInput;
