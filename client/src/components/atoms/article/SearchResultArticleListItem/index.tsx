import React from 'react';
import { IArticle } from 'types/article';
import { SearchResultArticleListItemContainer } from './style';

interface ISearchResultArticleListItemProps {
	article: IArticle;
}

function SearchResultArticleListItem(props: ISearchResultArticleListItemProps) {
	const { article } = props;
	const publishedDateArr = article.publishedDate;
	const date = `${publishedDateArr[0]}년 ${publishedDateArr[1]}월 ${publishedDateArr[2]}일`;

	return (
		<SearchResultArticleListItemContainer>
			<img src={article.thumbnailImg} alt="" />
			<div className="content">
				<h3>{article.title}</h3>
				<div className="article-info">
					<h4>{article.writer}</h4>
					<h4>{date}</h4>
				</div>
			</div>
		</SearchResultArticleListItemContainer>
	);
}

export default SearchResultArticleListItem;