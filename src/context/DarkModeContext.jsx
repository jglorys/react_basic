import { createContext, useState } from 'react';

// REACT에서 Context를 쓰는 것은 우산을 만든다. 
// 그 우산을 씌워주고 싶은 컴포넌트 위에 씌우면, 
// 그 우산을 쓴 컴포넌트 하위에 있는 모든 자식요소들이 그 우산에 있는 데이터에 접근이 가능하다.
// 그 우산(컨텍스트)을 만들려면, 우선 리액트에서 제공해주는 createContext를 이용해서 컨텍스트 만들고,
// 그리고 자식 컴포넌트들을 만들어서, 
// 자식 컴포넌트들을 우리가 위에서 만든 컨텍스트에서 제공해주는 Provider로 감싸주면 되고, 
// 자식과 공유하고 싶은 데이터가 있으면 value에 지정해주면 됨
// 다크모드인지 아닌지, 토글링하는것까지 넣어줌
export const DarkModeContext = createContext();

// 우산을 만든다고 생각하자!
export function DarkModeProvider({children}) {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode((mode) => !mode);
    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}