---
title: movie recomaendation system
description: How I Built a Movie Recommendation System with Python and Scikit-learn
img: https://th.bing.com/th/id/OIG.GjjlJL_wIq._9kDxrnSE?w=270&h=270&c=6&r=0&o=5&dpr=1.1&pid=ImgGn
---

# How I Built a Movie Recommendation System with Python and Scikit-learn

Have you ever wondered how Netflix or Amazon suggest movies to you based on your preferences and ratings? In this post, I will show you how I built a simple movie recommendation system using Python and Scikit-learn, a popular machine learning library.

## The Dataset

The first step in building a recommendation system is to find a suitable dataset. For this project, I used the [MovieLens](https://grouplens.org/datasets/movielens/) dataset, which contains 100,000 ratings from 943 users on 1682 movies. The ratings are on a scale of 1 to 5, where 1 means "I hated it" and 5 means "I loved it".

The dataset consists of three files: `u.data`, `u.item` and `u.user`. The `u.data` file contains the ratings in the format of `user_id`, `movie_id`, `rating` and `timestamp`. The `u.item` file contains the movie information in the format of `movie_id`, `movie_title`, `release_date` and other attributes. The `u.user` file contains the user information in the format of `user_id`, `age`, `gender`, `occupation` and `zip_code`.

## The Model

The next step is to choose a model for the recommendation system. There are many types of recommendation systems, such as content-based, collaborative filtering, hybrid and others. For this project, I decided to use a collaborative filtering approach, which is based on the idea that users who have similar preferences will rate similar items similarly.

There are two main types of collaborative filtering: user-based and item-based. User-based collaborative filtering finds users who are similar to the target user and recommends items that they liked. Item-based collaborative filtering finds items that are similar to the target item and recommends them to users who liked the target item.

For this project, I chose to use item-based collaborative filtering, because it is more scalable and stable than user-based collaborative filtering. To measure the similarity between items, I used the cosine similarity metric, which is defined as:

cosine similarity=∥a∥∥b∥a⋅b​

where a and b are vectors representing the ratings of two items by all users. The cosine similarity ranges from -1 to 1, where 1 means the items are perfectly similar and -1 means they are perfectly dissimilar.

To implement the model, I used Scikit-learn's [pairwise_distances](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.pairwise_distances.html) function, which computes the pairwise distances or similarities between rows or columns of a matrix. I passed the ratings matrix as the input and specified the metric as "cosine". The output was a similarity matrix where each element was the cosine similarity between two items.

## The Recommendation

The final step is to generate recommendations for a given user or item. To do this, I defined a function that takes a user_id or a movie_id as an input and returns a list of recommended items or users along with their similarity scores.

The function works as follows:

- If the input is a user_id, it finds all the items that the user has not rated yet and computes their predicted ratings by taking a weighted average of the ratings of similar items that the user has rated. The weights are proportional to the similarity scores. Then it sorts the items by their predicted ratings in descending order and returns the top 10 items.
- If the input is a movie_id, it finds all the users who have not rated that movie yet and computes their predicted ratings by taking a weighted average of their ratings of similar movies that they have rated. The weights are proportional to the similarity scores. Then it sorts the users by their predicted ratings in descending order and returns the top 10 users.

## The Code

The code for this project is available on my [GitHub repo](https://github.com/johndoe/movie-recommendation-system). You can also view my [Jupyter Notebook](https://johndoe.com/movie-recommendation-system.ipynb) where I explain each step in detail and show some examples of recommendations.

## The Conclusion

In this post, I showed you how I built a movie recommendation system using Python and Scikit-learn. I used an item-based collaborative filtering approach with cosine similarity as the metric. I also wrote a function that can generate recommendations for users or items based on their preferences and ratings.
