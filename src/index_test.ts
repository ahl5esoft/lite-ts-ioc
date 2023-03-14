import { strictEqual } from 'assert';
import { ioc } from '.';

abstract class TestBase {
    public abstract say(): string;
}

class ATest extends TestBase {
    public say() {
        return 'this is a';
    }
}

class Test {
    @ioc.Inject(TestBase)
    public t: TestBase;
}

describe('src/index.ts', () => {
    describe('ioc.Inject(typer: Typer)', () => {
        it('ok', async () => {
            ioc.set(
                TestBase,
                new ATest(),
            );

            const self = new Test();
            ioc.inject(self);

            const res = self.t.say();
            strictEqual(res, 'this is a');
        });
    });
});