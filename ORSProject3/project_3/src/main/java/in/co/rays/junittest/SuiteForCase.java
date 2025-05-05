package in.co.rays.junittest;

import junit.framework.TestSuite;

public class SuiteForCase{
	
	public static void main(String[] args) {
		junit.textui.TestRunner.run(getSuite());
	}

	public static TestSuite getSuite() {

		TestSuite suite = new TestSuite("TestAll");

		suite.addTestSuite(SecoundTestCase.class);
		suite.addTestSuite(FirstTestCase.class);

		return suite;

	}

}
