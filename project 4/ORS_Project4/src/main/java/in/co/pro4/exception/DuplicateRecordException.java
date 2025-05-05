package in.co.pro4.exception;

/**
 * DuplicateRecordException thrown when a duplicate record occurred.
 * @author Harshvardhan Patidar
 *
 */
public class DuplicateRecordException extends Exception {

	public DuplicateRecordException(String msg) {
		super(msg);
	}
}
