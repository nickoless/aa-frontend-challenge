import styled from 'styled-components';

import { theme } from 'globalStyle';
import { SetSort, Sort } from './commonTypes';

interface Props {
    sort: Sort;
    setSort: SetSort;
}

const GalleryHeader = ({ sort, setSort }: Props) => {
    return (
        <GalleryHeaderEl>
            <Heading>Photos</Heading>
            <SortNav>
                <SortOption $selected={sort === 'recent'} onClick={() => setSort('recent')}>
                    Recently Added
                </SortOption>
                <SortOption $selected={sort === 'favorited'} onClick={() => setSort('favorited')}>
                    Favorited
                </SortOption>
            </SortNav>
        </GalleryHeaderEl>
    );
};

export default GalleryHeader;

// STYLES

const GalleryHeaderEl = styled.div`
    margin-bottom: 3rem;
    border-bottom: 2px solid ${theme.border};
`;

const Heading = styled.h1`
    font-weight: 900;
`;

const SortNav = styled.nav`
    margin-top: 3rem;
    height: 50px;
    display: flex;
    gap: 3rem;
`;

const SortOption = styled.div<{ $selected: boolean }>`
    cursor: pointer;
    font-weight: bold;
    height: 50px;
    color: ${({ $selected }) => ($selected ? `${theme.highlight}` : `${theme.textSecondary}`)};

    ${({ $selected }) => $selected && `border-bottom: 2px solid ${theme.highlight}`};
`;
