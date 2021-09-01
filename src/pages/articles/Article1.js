import React from 'react';
import './Article1.css';

function Article1() {
    return (
        <div className="article">
            <h1 className="article-headline"> A Statistical Approach to UFC Betting </h1>
            <p className="text"> December 27, 2020</p>

            <h3 className="article-subheadline"> I. OVERVIEW </h3>
            <p className="text"> 
                The goal of the UFC Fight Predictor project is to see if we can analyze data about previous UFC fights to predict future fights 
                with greater accuracy than the oddsmakers. If we can correctly identify an edge over the betting odds, we should theoretically 
                be able to make money betting in the long-run. In order to do this, we will have to aggregate data from various sources 
                and identify the statistically relevant features. We will then have to evaluate different potential models and select the best 
                one. Finally, we will have to identify the best odds for each fight and bankroll accordingly. 
            </p>

            <h3 className="article-subheadline"> II. DATA COLLECTION </h3>
            <p className="text"> We can scrape fight data from websites online by using the Beautiful Soup and Selenium Python packages. We would like to scrape the following websites: </p>
            
            <ul className="unordered-list">
                <li className="text">
                    <b><a href="https://www.tapology.com/" target="_blank">Tapology</a>:</b> This website contains the fight results (and supplementary information) for every UFC fight. We can use these results to calculate a rating (see <a  href="https://en.wikipedia.org/wiki/Glicko_rating_system" target="_blank">Glicko-2</a>) for each fighter.
                </li>
                <li className="text">
                    <b><a href="http://ufcstats.com/" target="_blank">UFC Stats</a>:</b> This website contains striking and grappling statistics for each fighter. We can use this information to account for stylistic matches between fighters. In addition, we can get the physical attributes of each fighter.
                </li>
                <li className="text">
                    <b><a href="https://www.bestfightodds.com/" target="_blank">Best Fight Odds</a>:</b> This website contains the moving lines of different betting websites for each UFC fight since 2007. We can use this information to calculate the oddsmakers' implied probability of each fighter winning.
                </li>
            </ul>

            <h3 className="article-subheadline"> III. POTENTIAL FEATURES </h3>
            <p className="text"> 
                Using the collected data, we have to come up with features that can be used to train the model. It is not clear what information is 
                statistically relevant, so this may require some analysis and trial and error to optimize the model’s results. Some ideas for the features are:
            </p>
            <ul className="unordered-list">
                <li className="text">
                    <b>Glicko-2 Rating:</b> This is a method for assessing skill level, which was invented as an improvement of the Elo rating system. In particular, it 
                    includes measurements for rating reliability and rating volatility. We should be able to calculate a score for each fighter based on their wins 
                    and losses, using the algorithm described here. Hopefully, this will be able to capture each fighter’s record, momentum and ring rust.
                </li>
                <li className="text">
                    <b>Fighter Statistics:</b> There are a number of career statistics that can be used to encode a fighter’s style (e.g. striker or grappler). Hopefully, this will be able to capture the idea that “styles make fights”. These statistics include:
                    <ul className="unordered-list">
                        <li className="nested-text">
                            SLpM - Significant Strikes Landed per Minute
                        </li>
                        <li className="nested-text">
                            SApM - Significant Strikes Absorbed per Minute
                        </li>
                        <li className="nested-text">
                            Str. Acc. - Significant Strike Accuracy
                        </li>
                        <li className="nested-text">
                            Str. Def. - Significant Strike Defense
                        </li>
                        <li className="nested-text">
                            TD Acc. - Takedown Accuracy
                        </li>
                        <li className="nested-text">
                            TD Def. - Takedown Defense
                        </li>
                        <li className="nested-text">
                            TD Avg. - Average Takedowns Landed per 15 minutes
                        </li>
                        <li className="nested-text">
                            Sub. Avg. - Average Submissions Attempted per 15 minutes
                        </li>
                    </ul>
                </li>
                <li className="text">
                    <b>Fighter Attributes:</b> The physical attributes of each fighter can be used to account for any natural advantages. For example, this
                    would include each fighter's height, reach and age.
                </li>
                <li className="text">
                    <b>Betting Odds:</b> Rather than have our model make predictions from scratch, we can calculate implied probablilites from the betting odds and feed them to the model. 
                    The odds reflect the analysis and predictions of the oddsmakers. Hopefully, this will capture other important factors about a fight, such as 
                    a fighter missing weight, moving weight classes, getting injured or taking a fight on short notice.
                </li>
            </ul>
            

            <h3 className="article-subheadline"> IV. POTENTIAL MODELS </h3>
            <p className="text"> 
                There are a number of machine learning models that we can choose from. All the models involve supervised learning to perform binary classification 
                (i.e. either fighter wins or loses) with a confidence score. They should all be compared to see which one returns the best results. Some ideas for the models are:
            </p>

            <ul className="unordered-list">
                <li className="text">
                    <b>Logistic Regression:</b> This algorithm uses a sigmoid function to squeeze the output of a linear equation between two possible values. The input values are combined 
                    linearly using weights or coefficients.
                </li>
                <li className="text">
                    <b>K-Nearest Neighbours:</b> This algorithm is very simple and classifies new data points based on the majority classification of local data points (typically weighted as the 
                    inverse of distance from the new point). The data will likely need to be normalized to improve accuracy.
                </li>
                <li className="text">
                    <b>Support Vector Machines:</b> This algorithm aims to find a hyperplane in an N-dimensional space (where N is the number of features),  which distinctly classifies the data points. 
                    The hyperplane should be the one that maximizes the distance between the data points of each class.
                </li>
                <li className="text">
                    <b>Decision Trees:</b> This algorithm creates a set of hierarchical decisions that lead to the result. A tree is created by repeatedly splitting the data on the “best” 
                    features. A tree is then pruned to remove low importance splits, which prevents overfitting. We should use the random forest or xgboost technique, which both use 
                    an ensemble of these trees to produce more accurate results.
                </li>
            </ul>

            <p className="text"> All these machine learning models can be implemented using the scikit-learn Python package. </p>

            <h3 className="article-subheadline"> V. ODDS AND BANKROLL MANAGEMENT </h3>

            <p className="text">
                We can compare the different odds of betting websites on Best Fight Odds. For each fight, we can choose the betting website that gives us the greatest edge and maximizes potential profits.
            </p>

            <p className="text">
                A set bankroll should be set aside for all betting, which we can afford to lose. Based on the bankroll, a unit size should be selected of about 1-5%, depending on how conservative or aggressive we want to be. The unit size is the smallest amount of money that will be used for each bet. As money is won and lost, the bankroll and unit size should be reevaluated.
            </p>

            <p className="text">
                There are many strategies for bankroll management, such as: the fixed unit model, the percentage model, the potential return model, the confidence model, and the Kelly criterion model.
            </p>
                    
            <p className="text">
                These strategies are described in detail <a href="https://www.bettingpros.com/articles/the-importance-of-bankroll-management-in-sports-betting/" target="_blank">here</a>. They should be compared and the most appropriate one should be selected.
            </p>

            <div className="article-subheadline">

            </div>

        </div>
    );
}

export default Article1;