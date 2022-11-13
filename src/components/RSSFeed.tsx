import React, { useEffect, useState } from 'react';
import Parser from 'rss-parser';
import Link from './Link';
import ListItem from './ListItem';
import Skeleton from './Skeleton';

const rssParser = new Parser();

type RSSFeedProps = {
    url: string;
};

type FeedItem = {
    title: string;
    link: string;
};

const RSSFeed = ({ url }: RSSFeedProps) => {
    const [feedItems, setFeedItems] = useState<FeedItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const feedResponse = await fetch(url);
                const feedString = await feedResponse.text();
                const feed: any = await rssParser.parseString(feedString);
                // We slice the feed to get a selection of items
                setFeedItems(feed.items.slice(0, 10));
            } catch (e) {
                setHasError(true);
                console.error('Error fetching feed', e);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [url]);

    return (
        <>
            {hasError && <p>{`Error fetching feed: ${url}`}</p>}
            {isLoading && <Skeleton />}
            {feedItems.length > 0 && (
                <>
                    {feedItems.map((item) => (
                        <ListItem key={item.title}>
                            <Link title={item.title} link={item.link} />
                        </ListItem>
                    ))}
                </>
            )}
        </>
    );
};

export default RSSFeed;
