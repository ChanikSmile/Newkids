package com.ssafy.articleservicce.api.service.articleread;

import com.ssafy.articleservicce.api.controller.article.response.ArticleReadResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
@Transactional
public class ArticleReadService {

    public ArticleReadResponse createArticleRead(String memberKey, Long articleId) {
        return null;
    }

    public void removeArticleRead(Long articleReadId) {

    }
}