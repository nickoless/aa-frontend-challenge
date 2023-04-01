import Gallery from 'components/Gallery';
import { ImageAPIContextProvider } from 'context/ImageAPIContext';
import { ImageIdContextProvider } from 'context/ImageIdContext';

const App = () => {
    return (
        <ImageAPIContextProvider>
            <ImageIdContextProvider>
                <Gallery />
            </ImageIdContextProvider>
        </ImageAPIContextProvider>
    );
};

export default App;
