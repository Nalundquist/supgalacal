import GalAge from './../src/galcal.js';

describe ('GalAge', () => {

	let newAge;

	beforeEach(() => {
		newAge = new GalAge(72, "");
		newAge.calAge();
	});

	test('Should be a constructor capable of holding an earthAge key:value pair', () => {
		expect(newAge.earthAge).toEqual(72);
	})

	describe ('calAge', () => {

		test('calAge method should take this.earthAge and convert it to Mercury Years (rounded to the nearest integer)', () => {
			expect(newAge.mercAge).toEqual(300);
		})

		test('calAge method should take this.earthAge and convert it to Venus Years (rounded to the nearest integer)', () => {
			expect(newAge.venusAge).toEqual(116)
		})

		test('calAge method should take this.earthAge and convert it to Mars Years (rounded to the nearest integer)', () => {
			expect(newAge.marsAge).toEqual(38)
		})

		test('calAge method should take this.earthAge and convert it to Jupiter Years (rounded to the nearest integer)', () => {
			expect(newAge.jupiAge).toEqual(6)
		})
	})

	describe('lifeExp', () => {

		test('lifeExp method should calculate average earth life expectancy modified by high piousness; apply that to previous planet calculations', () => {
			newAge.piety = "god-fearing"
			newAge.lifeExp(); 
			expect(newAge.earthExp).toEqual(91)
			expect(newAge.mercExp).toEqual(379)
			expect(newAge.venusExp).toEqual(147)
			expect(newAge.marsExp).toEqual(48)
			expect(newAge.jupiExp).toEqual(8)
		})

		test('lifeExp method should calculate average earth life expectancy modified by highest piousness; apply that to previous planet calculations', () => {
			newAge.piety = "zealot"
			newAge.lifeExp(); 
			expect(newAge.earthExp).toEqual(104)
			expect(newAge.mercExp).toEqual(433)
			expect(newAge.venusExp).toEqual(168)
			expect(newAge.marsExp).toEqual(55)
			expect(newAge.jupiExp).toEqual(9)
		})

		test('lifeExp method should calculate average earth life expectancy modified by low piousness; apply that to previous planet calculations', () => {
			newAge.piety = "strayed"
			newAge.lifeExp(); 
			expect(newAge.earthExp).toEqual(63)
			expect(newAge.mercExp).toEqual(263)
			expect(newAge.venusExp).toEqual(102)
			expect(newAge.marsExp).toEqual(34)
			expect(newAge.jupiExp).toEqual(5)
		})

		test('lifeExp method should calculate average earth life expectancy modified by lowest piousness; apply that to previous planet calculations', () => {
			newAge.piety = "apostate"
			newAge.lifeExp(); 
			expect(newAge.earthExp).toEqual(55)
			expect(newAge.mercExp).toEqual(229)
			expect(newAge.venusExp).toEqual(89)
			expect(newAge.marsExp).toEqual(29)
			expect(newAge.jupiExp).toEqual(5)
		})

		test('lifeExp method should return default life expectancy on earth for neutral piousness/no input; apply that to previous planet calculations', () => {
			newAge.piety = ""
			newAge.lifeExp(); 
			expect(newAge.earthExp).toEqual(73)
			expect(newAge.mercExp).toEqual(304)
			expect(newAge.venusExp).toEqual(118)
			expect(newAge.marsExp).toEqual(39)
			expect(newAge.jupiExp).toEqual(6)
		})

		test('lifeExp should calculates years beyond expectancy if one has outlived said on a per-planet basis', () => {
			const atheistPartyElder = new GalAge(115, "apostate");
			atheistPartyElder.calAge();
			atheistPartyElder.lifeExp();
			expect(atheistPartyElder.earthDiff).toEqual(60)
			expect(atheistPartyElder.mercDiff).toEqual(250)
			expect(atheistPartyElder.venusDiff).toEqual(96)
			expect(atheistPartyElder.marsDiff).toEqual(32)
			expect(atheistPartyElder.jupiDiff).toEqual(5)
		})
	})

	describe('galCal', () => {

		test('galCal should take an "age" argument and return an array with four numbers; each "age" modified', () => {
			expect(newAge.galCal(91)).toEqual([379, 147, 48, 8])
		})
	})
})

