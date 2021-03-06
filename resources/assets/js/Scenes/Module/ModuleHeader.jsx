import React from 'react'
import {connect} from 'react-redux'

import ModuleStarRating from 'js/Components/ModuleRating/ModuleStarRating'

import {
    userIsVerified,
    currentModule,
    userRatingForModule
} from 'js/functions/stateHelpers'

class ModuleHeader extends React.Component {
    renderPublishedYear() {
        if (!this.props.module.published_date)
            return;

        const date = this.props.module.published_date,
            publishedDate = date.substr(0, date.indexOf('-'));

        return <span>| Published: {publishedDate}</span>;
    }

    renderPublisher() {
        if (!this.props.module.publisher_id)
            return;

        return <span>| Publisher: {this.props.module.publisher.name}</span>
    }

    renderLeadWriter() {
        if (!this.props.module.contributors)
            return;

        const c = this.props.module.contributors.find(
            (e) => e.contributor_type_id === 1
        );

        if (!c)
            return;

        return <span>| Lead Writer: {c.name}</span>
    }

    renderSubTitle() {
        if (!this.props.module)
            return;

        return (
            <h5 className="small">
                Module-{this.props.module.id} {this.renderPublishedYear()} {this.renderPublisher()} {this.renderLeadWriter()}
            </h5>
        )
    }

    renderEdition() {
        if (!this.props.module.edition)
            return;

        return (
            <div>
                <h4>{this.props.module.edition.name}</h4>
                <h5 className="small text-capitalize">Edition</h5>
            </div>
        )
    }

    renderLevelRange() {
        const module = this.props.module;
        if (!module.min_level && !module.max_level) {
            return;
        }
        const minLevel = module.min_level || '?';
        const maxLevel = module.max_level || '?';

        return (
            <div>
                <h4>{minLevel}-{maxLevel}</h4>
                <h5 className="small text-capitalize">Level Range</h5>
            </div>
        )
    }

    renderModuleLength() {
        if (!this.props.module.length)
            return;

        return (
            <div>
                <h4>{this.props.module.length.name}</h4>
                <h5 className="small text-capitalize">Length</h5>
            </div>
        )
    }

    renderTextRating() {
        if (!this.props.module.avg_rating.length)
            return;

        const rating = parseFloat(this.props.module.avg_rating[0].aggregate).toFixed(2);

        return (
            <div>
                <h4>{rating}</h4>
                <h5 className="small text-capitalize">Rating</h5>
            </div>
        )
    }

    renderStarRating() {
        if (!this.props.module.avg_rating.length)
            return;

        const rating = parseFloat(this.props.module.avg_rating[0].aggregate);

        return (
            <ModuleStarRating
                id={this.props.module.id}
                current={rating}
                userRating={this.props.userRating}
                readonly={!this.props.canRate}
            />
        )
    }

    render() {
        if (!this.props.module.id)
            return null;

        return (
            <div className="moduleHeader">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <h3>{this.props.module.name}</h3>
                            {this.renderSubTitle()}
                        </div>
                        <div className="col-2 text-center">
                            {this.renderStarRating()}
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-2 text-center">{this.renderEdition()}</div>
                        <div className="col-2 text-center">{this.renderLevelRange()}</div>
                        <div className="col-2 text-center">{this.renderModuleLength()}</div>
                        <div className="col-2 text-center">{this.renderTextRating()}</div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        canRate: userIsVerified(state),
        userRating: userRatingForModule(state, currentModule(state).id)
    }
}

export default connect(mapStateToProps)(ModuleHeader)