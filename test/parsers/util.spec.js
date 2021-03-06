import test from 'ava';
import { flattenRoutes } from '../../src/parsers/util';

import { initialRoutes, expectedRoutes } from '../mock/routes';

test('flattenRoutes', t => {
    const flatRoutes = flattenRoutes(initialRoutes);

    flatRoutes.map( (flatRoute, index) => {
        t.deepEqual(
            flatRoutes[index],
            expectedRoutes[index],
            `should work for route with id ${expectedRoutes[index].id}`
        );
    })

});