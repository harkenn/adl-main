import React from 'react';

import Filter from '../Components/Filter';
import Button from '../Components/Button';

class LengthFilter extends React.Component {
    renderButtons() {
        if (this.props.lengths.length > 0) {
            return this.props.lengths.map((length) =>
                <Button
                    key={length.id}
                    id={length.id}
                    name={length.name}
                    click={this.props.click}
                    active={this.props.activeListings.includes(length.id)}
                    activeListings={this.props.activeListings}
                />
            );
        }
        return null;
    }

    render() {
        return (
            <Filter id="length" label="Adventure Length">
                {this.renderButtons()}
            </Filter>
        );
    }
}

export default LengthFilter;