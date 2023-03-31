import Gallery from 'components/Gallery';
import SidePanel from 'components/SidePanel';
import { ImagesContextProvider } from 'contexts/ImagesContext';
import { ImageDetailsContextProvider } from 'contexts/ImageDetailsContext';
import styled from 'styled-components';

const App = () => {
    return (
        <ImagesContextProvider>
            <ImageDetailsContextProvider>
                <AppWrapper>
                    <Gallery />
                    <SidePanel />
                </AppWrapper>
            </ImageDetailsContextProvider>
        </ImagesContextProvider>
    );
};

export default App;

// STYLES

const AppWrapper = styled.div`
    display: flex;
`;
