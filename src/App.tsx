import Gallery from 'components/Gallery';
import { APIContextProvider } from 'contexts/APIContext';
import { ImageContextProvider } from 'contexts/ImageContext';

const App = () => {
    return (
        <APIContextProvider>
            <ImageContextProvider>
                <Gallery />
            </ImageContextProvider>
        </APIContextProvider>
    );
};

export default App;
