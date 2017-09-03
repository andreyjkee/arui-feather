/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { render, cleanUp } from '../test-utils';

import FlagIcon from './flag-icon';

describe('flag-icon', () => {
    afterEach(cleanUp);

    it('renders without problems', () => {
        let flagIcon = render(<FlagIcon />);
        expect(flagIcon.node).to.have.exist;
    });

    it('should call `onClick` callback after flag icon was clicked', () => {
        let onClick = sinon.spy();
        let flagIcon = render(<FlagIcon onClick={ onClick } />);

        flagIcon.node.click();

        expect(onClick).to.have.been.calledOnce;
    });
});
