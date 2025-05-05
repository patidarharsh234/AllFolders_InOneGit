package com.rays.junit;

import static org.junit.Assert.assertArrayEquals;
import static org.junit.Assert.assertNotEquals;

import org.junit.Test;

import junit.framework.TestCase;

public class TestCaseSec extends TestCase {

	@Test
	public void test() throws Exception {

		int[] actual = { 1, 2, 3, 4, 5, 6 };

		int[] excepted = { 1, 2, 3, 4, 5, 7 };

		String[] s = { "hello" };
		String[] s1 = { "hello2" };

		assertEquals("hello", 6, ArrayClass.findMaxArray(actual));

		
		
		 assertNotEquals("  Note Equal Then Test Pass ", excepted, actual);
		assertArrayEquals("   int[]  Array Compare    ", excepted, actual);
		assertArrayEquals(" Object[] Array Compare    ", s, s1);
		

		int i1 = 110;
		assertSame(110, i1);

		assertNotSame(5, ArrayClass.findMaxArray(actual));

	}

}
