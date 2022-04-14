/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// state는 컴포넌트에서 렌더링 되는 데이터를 담고 있는 유지 객체	- 화면에 출력되는 데이터 객체이기 때문에 매우 중요함
// state는 클래스 컴포넌트에서만 사용이 가능하고 함수에서는 사용이 불가능 하다
// state는 render() 함수의 밖에만 선언이 가능하다
// state는 직접 바꾸면 안되는 특징이 있다 바꾸기 위해서는 setState를 사용해야 한다
// state는 조심히 다뤄야 하기 때문에 데이터 값을 변경시 현재의 값을 복사한 이후에 복사한것을 변경하는 방식으로 진행한다

  // Props는 수정 변경이 불가능한 읽기전용 프로퍼티이다 
  // 부모 자식 형식이 이루어져야하고 부모에서 자식으로 넘어가는 데이터를 가르켜 props라 한다
  // 사용하는 이유는 부모객체가 가진 정보를 자식으로 전달하는 과정을 쉽게 하기 위해서 사용한다
import React from 'react';
import { View, Text } from 'react-native';

const PropsChild = (Props) => {
    return (
        <View>
            <Text onPress={Props.changeState}>
                {Props.sampleText}
            </Text>
        </View>
    );
};

export default PropsChild;