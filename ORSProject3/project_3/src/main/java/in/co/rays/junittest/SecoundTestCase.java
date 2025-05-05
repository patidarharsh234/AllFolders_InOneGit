package in.co.rays.junittest;
import static org.junit.Assert.*;

import org.junit.Test;

import in.co.rays.project_3.exception.ApplicationException;
import in.co.rays.project_3.model.ModelFactory;
import in.co.rays.project_3.model.UserModelInt;
import junit.framework.TestCase;

public class SecoundTestCase extends TestCase {
	UserModelInt model= null;
	@Test
	public void test() throws Exception {
		model = ModelFactory.getInstance().getUserModel();
		model.findByPK(4);
		assertTrue(model != null);
	}
	

}
