import React, { useEffect, useState, useRef } from 'react'
import { ScrollView } from 'react-native'
import { PhotoGrid } from 'react-native-photo-grid-frame';
import * as MediaLibrary from 'expo-media-library';

const Photos = () => {
    const [photos, setPhotos] = useState([] as any[])
    const lastFetchedAsset = useRef(null);

    const loadMoreData = () => {
        const options = {
        }

        if (lastFetchedAsset.current) {
            options.after = lastFetchedAsset.current
        }

        MediaLibrary.getAssetsAsync(options).then(({ assets, endCursor }: any) => {
            const modifiedAssets = assets.map((asset: any) => ({
                ...asset,
                key: asset.id,
                url: asset.uri
            }));
            setPhotos(photos => [...photos, ...modifiedAssets]);
            lastFetchedAsset.current = endCursor
        })
    }
    const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
        const paddingToBottom = 20
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom
    }

    useEffect(() => {
        loadMoreData();
    }, [])

    return (
        <ScrollView style={{ top: 30 }} onMomentumScrollEnd={({ nativeEvent }) => {
            if (isCloseToBottom(nativeEvent)) {
                loadMoreData()
            }
        }}>
            <PhotoGrid PhotosList={photos} borderRadius={10} />
        </ScrollView>
    )
}

export default Photos
